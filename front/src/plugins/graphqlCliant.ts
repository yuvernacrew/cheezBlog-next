import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = (uri: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

export const graqhqlCliant = client(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.spaceId}/?access_token=${process.env.accessToken}`
);
