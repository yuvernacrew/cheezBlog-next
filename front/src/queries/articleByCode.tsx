import { gql } from '@apollo/client';

export default gql`
  query($code: String!) {
    ${process.env.contentfulCollectionName}(where: { code: $code }) {
      items {
        sys {
          id
          publishedAt
          firstPublishedAt
        }
        code
        title
        content
        robots
        mainVisual {
          url
          title
        }

        tagsCollection {
          items {
            name
            code
          }
        }
      }
    }
  }
`;
