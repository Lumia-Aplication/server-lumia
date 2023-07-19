import { request } from 'undici';
require('dotenv').config()

export default {
  Mutation: {
    authLogin: async (_: undefined, { code }: { code: string }) => {
      const tokenResponseData = await request('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: `${process.env.CLIENT_ID}`,
					client_secret: `${process.env.CLIENT_SECRET}`,
					code,
					grant_type: 'authorization_code',
					redirect_uri: `${process.env.REDIRECT_URI}`,
					scope: 'identify',
				}).toString(),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});

			const oauthData = await tokenResponseData.body.json();

      const response = await request('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${oauthData.token_type} ${oauthData.access_token}`,
        },
      });

      const user = await response.body.json();
      return {
        user,
      };
    },
  },
};
