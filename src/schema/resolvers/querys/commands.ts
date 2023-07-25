import { type Context, type ClientModels } from "../../../types";
require('dotenv').config()

export default {
    Query: {
        commands: async (_: unknown, __: unknown, { models }: Pick<Context, "models">) => {
            const { Client } = models;

            try {
               const client  = await Client.findOne({ clientId: `${process.env.CLIENT_ID}` }) ?? { client: '', commands: [] }

               if(!client) {
                throw new Error('No Commands Registered')
               }

               return client.commands
            } catch {
                return null;
            }
        }
    }
}