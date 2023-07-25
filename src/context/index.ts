import { client } from '../modules';
import { User, Guild, Client } from '../models';

const models = {
  User,
  Guild,
  Client
}

const context = () => {
  return {
    client,
    models,
  };
};

export { context };