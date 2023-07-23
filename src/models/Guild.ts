import { Schema, model, type Model } from 'mongoose';

import { IGuild } from '../types';

const guildSchema = new Schema({
  guildId: { type: String, required: true, unique: true },
  prefix: { type: String, default: '.' },
  usages: { type: Number, default: 0 },
  lastReset: { type: Date, default: Date.now },
});

const Guild: Model<IGuild> = model<IGuild>('Guild', guildSchema);

export default Guild;