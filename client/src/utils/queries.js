import { gql } from '@apollo/client';

export const QUERY_USER = gql`
{
    me {
      _id
      username
      email
      savedBooks {
        title
        image
        description
        bookId
        authors
      }
    }
  }
`;