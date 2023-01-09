const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}

type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String
}

// Setting an Auth tupe to handle returning data from user creating or use login
type  Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]!
    user(userIs: ID!): User
}

type Mutation {
    
}
`