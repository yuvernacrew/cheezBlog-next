import { gql } from '@apollo/client';

export default gql`
  query($code: String!) {
    cheezBlogCollection(where: { code: $code }) {
      items {
        sys {
          id
          publishedAt
          firstPublishedAt
        }
        code
        title
        content
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
