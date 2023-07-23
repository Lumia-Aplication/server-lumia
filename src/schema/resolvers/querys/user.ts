import { type Context } from '../../../types';

export default {
    Query: {
        user: async (_: unknown, { id }: { id: string }, { models, client }: Pick<Context, "models" | "client"> ) => {
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