import { Context } from "../../../types";
require('dotenv').config()

export default {
    Mutation: {
        receiveCommands: async (_: unknown, { input }: { input: [] }, { models }: Pick<Context, "models">) => {
            const { Client } = models;
            try {
               const commandsDb = await Client.findOneAndUpdate({ clientId: `${process.env.CLIENT_ID}` }, { commands: input }, { new: true })
               if(!commandsDb) {

                const newCommands = await Client.create({ commands: input })
                return newCommands.commands;
               }

               return commandsDb.commands;
            } catch {
                return null;
            }
        }
    }
}