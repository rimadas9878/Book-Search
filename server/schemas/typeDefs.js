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
    bookId: String!
    authors: [String]
    description: String! 
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
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!)
}
`