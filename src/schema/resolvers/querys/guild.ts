import { type Context } from '../../../types';

export default {
    Query: {
        guild: async (_: unknown, { id }: { id: string }, { models, client }: Pick<Context, "models" | "client"> ) => {
            const { Guild } = models;
            const guildsClient = client.guilds.cache.get(id);

            if(!guildsClient) {
                throw new Error('Invalid ID');
            }

                const guild = await Guild.findOne({ guildId: id });
                if(!guild) {
                    const newGuild = await Guild.create({ guildId: id });
                    return newGuild;
                }

                return guild;

        }
    }
}