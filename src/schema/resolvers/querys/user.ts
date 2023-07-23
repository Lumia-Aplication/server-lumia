import { type Client } from 'discord.js';

import { type Models } from '../../../types';

export default {
    Query: {
        user: async (_: unknown, { id }: { id: string }, { models, client }: { models: Models, client: Client }) => {
            const { User } = models;
            const usersClient = client.users.cache.get(id)

            if(!usersClient) {
                throw new Error('Invalid ID');
            }

            try {
            
                const user = await User.findOne({ userId: id })
                if(!user) {
                   const newUser = await User.create({ userId: id })
                   return newUser;
                }

                return user;
            } catch (error) {
                console.error(error);
            }
        }
    }
}