import { gql } from '@apollo/client';

export default gql`
  {
    ${process.env.contentfulCollectionName} {
      items {
        sys {
          id
          publishedAt
          firstPublishedAt
        }
        code
        title
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
