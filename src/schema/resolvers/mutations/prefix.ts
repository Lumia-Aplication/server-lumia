import { type InputPrefix, type Models } from '../../../types'

export default {
    Mutation: {
        changePrefix: async (_: unknown, { input }: { input: InputPrefix }, { models }: { models: Models }) => {
            const { id, prefix } = input;
            const { Guild } = models;
            try {

                const guild = await Guild.findOneAndUpdate({ guildId: id }, { prefix })
                return guild;
            } catch (error) {
                console.error(error)
            }
        }
    }
}