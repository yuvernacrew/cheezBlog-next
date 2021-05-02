import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const client = (uri: string) => {
  const link = createHttpLink({
    uri,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
};

export const graqhqlCliant = client(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.contentfulSpaceId}/?access_token=${process.env.contentfulAccessToken}`
);
