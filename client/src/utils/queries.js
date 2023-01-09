import { gql } from '@apollo/client';

export const QUERY_USER = gql`
{
    users {
      _id
      username
      email
      savedBooks {
        title
        link
        image
        description
        bookId
        authors
      }
    }
  }
`;