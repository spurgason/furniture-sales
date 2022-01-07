const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveItem(input: savedItem!): User
  removeItem(itemId: ID!): User
}
input savedItem {
  itemId: String
  sellers: [String]
  description: String
  title: String
  image: String
  
}

type User {
  _id: ID!
  username: String
  email: String
  itemCount: Int
  savedItems: [Item]
}

type Auth {
  token: ID!
  user: User
}

  type Item {
    itemId: ID!
    sellers: [String]
    # sellers: String
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
 

`;

module.exports = typeDefs;
