import { client } from '../modules';
import { User, Guild } from '../models';

const models = {
  User,
  Guild,
}

const context = () => {
  return {
    client,
    models,
  };
};

export { context };