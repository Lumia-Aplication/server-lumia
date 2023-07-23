import { GraphQLScalarType, Kind, ValueNode } from 'graphql';

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom Date scalar type',
  serialize(value: unknown) {
    if (!(value instanceof Date)) {
      throw new Error('O valor fornecido não é do tipo Date.');
    }
    return value.toISOString();
  },
  parseValue(value: unknown) {
    if (typeof value !== 'string') {
      throw new Error('O valor fornecido não é uma string.');
    }
    return new Date(value);
  },
  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});
