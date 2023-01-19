import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
      }
      token
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
      }
      token
    }
  }
`;
export const SAVE_BOOK = gql`
mutation saveBook($bookInput: BookInput!) {
    saveBook(bookInput: $bookInput) {
      _id
      email
      username
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

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      email
      _id
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

