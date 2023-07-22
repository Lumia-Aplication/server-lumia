import { schema } from './schema';
import { context } from './context'
import { ApolloServer } from 'apollo-server';
import * as modules from './modules'

modules

const server = new ApolloServer({ schema, context });

server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log('Server Started at ' + url));
