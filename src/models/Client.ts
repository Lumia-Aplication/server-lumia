import { Schema, model, type Model } from 'mongoose';
require('dotenv').config()

import { IClient } from '../types';

const clientSchema = new Schema({
    clientId: { type: String, required: true, unique: true, default: process.env.CLIENT_ID },
    commands: { type: [Object] },
});

const Client: Model<IClient> = model<IClient>('Client', clientSchema);

export default Client;