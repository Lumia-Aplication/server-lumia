import { resolvers } from './merge/resolvers';
import { typeDefs } from './merge/typeDefs';
import { mergeSchemas } from '@graphql-tools/schema';

export const schema = mergeSchemas({ typeDefs, resolvers });
