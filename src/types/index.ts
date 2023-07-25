import { type Model } from 'mongoose'
import { Client } from 'discord.js';

export interface Commands {
    name: string
    category: string
    description: string
    aliases: string[]
    use: string
}
export interface IGuild extends Document {
    guildId: string;
    prefix: string;
    usages: number;
    lastReset: Date;
}

export interface IUser extends Document {
    userId: string;
    lang: string;
}

export interface IClient extends Document {
    commands: Commands[]
}

export interface Models {
    Guild: Model<IGuild>;
    User: Model<IUser>;
    Client: Model<IClient>
}

export interface InputPrefix {
    prefix: string;
    id: string;
}

export interface InputLang {
    lang: string;
    id: string;
}

export interface Context {
    models: Models;
    client: Client;
}

export interface ClientModels {
    id: string
    commands: Commands[]
}
