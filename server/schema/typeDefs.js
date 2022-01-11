const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveItems(input: savedItem!): User
  removeItem(item_Id: ID!): User
}

type User {
  _id: ID
  username: String
  email: String
  password: String
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
