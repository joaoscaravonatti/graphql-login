import { GraphQLModule } from '@nestjs/graphql';

export const GraphQL = GraphQLModule.forRoot({
  autoSchemaFile: 'src/core/schema.gql',
  playground: true,
  debug: true,
  context: ({ req }) => ({ req }),
  formatError: error => new Error(error.message),
});
