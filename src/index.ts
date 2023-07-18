import { schema } from './schema';
import { ApolloServer } from 'apollo-server';
require('dotenv').config()

const server = new ApolloServer({ schema });

server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log('Server Started at ' + url));
