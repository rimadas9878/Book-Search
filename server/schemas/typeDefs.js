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

type  Auth {
    token: ID!
    user: User
}


input BookInput{
    bookId: String!
    authors: [String]
    description: String! 
    image: String
    link: String
    title: String
}
type Query {
    users: [User]!
    user(userId: ID!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInput : BookInput!) : User
    removeBook(bookId: String!) : User
}
`
module.exports = typeDefs;

// Setting an Auth tupe to handle returning data from user creating or use login