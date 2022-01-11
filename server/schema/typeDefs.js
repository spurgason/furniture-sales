const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveItem(input: savedItem!): User
  removeItem(itemId: ID!): User
}

type User {
  _id: ID!
  username: String
  email: String
  itemCount: Int
  savedItems: [Items]
}

type Auth {
  token: ID!
  user: User
}

  type Item {
    _id: ID
    name: String
    description: String
    image: String
    category: Category
    price: Float
    quantity: Int
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    categories: [Category]
    me: User
    users: [User]
    user(username: String!): User
  }

  
 

`;

module.exports = typeDefs;
