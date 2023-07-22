import dotenv from 'dotenv';
import Bot from './client';
import Database from './database';

dotenv.config();

const token = process.env.TOKEN || '';
const cluster = process.env.CLUSTER || '';

const database = new Database();
const bot = new Bot(token);

database.connect(cluster);
bot.login();

export const client = bot.getClient();