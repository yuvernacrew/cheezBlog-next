import { gql } from '@apollo/client';

export default gql`
  {
    ${process.env.contentfulCollectionName} {
      items {
        code
      }
    }
  }
`;
