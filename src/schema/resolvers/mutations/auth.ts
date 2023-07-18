import axios from 'axios';
require('dotenv').config()

export default {
  Mutation: {
    auth: async (_: undefined, { code }: { code: string }) => {
        try {

            const response = await axios.post('https://discord.com/api/oauth2/token', {
              client_id: process.env.CLIENT_ID,
              client_secret: process.env.CLIENT_SECRET,
              grant_type: 'authorization_code',
              code,
              redirect_uri: process.env.REDIRECT_URI,
              scope: 'identify'
            });
      
            const { access_token: accessToken, refresh_token: refreshToken } = response.data;
      
            const userResponse = await axios.get('https://discord.com/api/users/@me', {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            });
      
            const user = userResponse.data;
      
            return {
              accessToken,
              refreshToken,
              user
            };
        } catch (error) {
            console.error(error)
            throw new Error('Failed to authenticate with Discord');
        }
    }
  }
};
