import { type Client } from 'discord.js';

import { type Models } from '../../../types';

export default {
    Query: {
        guild: async (_: unknown, { id }: { id: string }, { models, client }: { models: Models, client: Client }) => {
            const { Guild } = models;
            const guildsClient = client.guilds.cache.get(id);

            if(!guildsClient) {
                throw new Error('Invalid ID');
            }

            try {

                const guild = await Guild.findOne({ guildId: id });
                if(!guild) {
                    const newGuild = await Guild.create({ guildId: id });
                    return newGuild;
                }

                return guild;
            } catch (error) {
                console.error(error);
            }
        }
    }
}