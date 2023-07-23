import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';
import { mergeResolvers } from '@graphql-tools/merge';

import { DateScalar } from '../scalars'; 

const resolverFiles = loadFilesSync(join(__dirname, '../resolvers/**/*.ts'));
const customResolver = {
    Date: DateScalar,
  };

export const resolvers = mergeResolvers([customResolver, ...resolverFiles]);