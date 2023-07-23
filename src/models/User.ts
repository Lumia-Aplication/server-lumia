import { Schema, model, type Model } from 'mongoose';

import { IUser } from '../types';

const userSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  lang: { type: String, default: 'br' }, 
});

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;