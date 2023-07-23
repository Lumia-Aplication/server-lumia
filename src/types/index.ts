import { type Model } from 'mongoose'
import { Client } from 'discord.js';
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

export interface Models {
    Guild: Model<IGuild>;
    User: Model<IUser>;
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