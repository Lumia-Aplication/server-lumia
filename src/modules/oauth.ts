import { URLSearchParams } from 'url';
import { request } from 'undici';

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;
const port = process.env.SERVER_PORT;

export async function authenticate(code: string): Promise<string> {
  try {
    const body = new URLSearchParams();
    body.append('client_id', clientId || '');
    body.append('client_secret', clientSecret || '');
    body.append('code', code);
    body.append('grant_type', 'authorization_code');
    body.append('redirect_uri', `http://localhost:${port}/callback`);
    body.append('scope', 'identify');

    const tokenResponse = await request('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: body.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const tokenData = await tokenResponse.body.json();

    // Armazene o token de acesso em um local seguro (ex.: banco de dados ou sessão do usuário)

    return 'Autenticado com sucesso!';
  } catch (error) {
    console.error('Erro ao obter o token de acesso:', error);
    throw new Error('Erro ao obter o token de acesso.');
  }
}
