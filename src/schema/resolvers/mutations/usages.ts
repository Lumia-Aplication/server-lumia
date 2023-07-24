import { Context } from '../../../types'

export default {
  Mutation: {
    usages: async (_: unknown, { id }: { id: string }, { models }: Pick<Context, "models">) => {
      const { Guild } = models;

      const now = new Date();
      const guild = await Guild.findOne({ guildId: id });
        
      const lastResetInMilliseconds = guild?.lastReset.getTime() ?? now.getTime();
      const nowInMilliseconds = now.getTime();

      if (nowInMilliseconds - lastResetInMilliseconds >= 2 * 60 * 60 * 1000) {
        return await Guild.findOneAndUpdate({ guildId: id }, { $set: { usages: 0, lastReset: now } });
      } else {
        return await Guild.findOneAndUpdate({ guildId: id }, { $inc: { usages: 1 } });
      }
    }
  }
}