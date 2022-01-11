const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Category {
  _id: ID
  name: String
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

type Cart {
  _id: ID
  purchaseDate: String
  items: [Item]
}

type User {
  _id: ID
  username: String
  email: String
  password: String
  items: [Cart]
  }

  type Checkout {
    session: ID
  }

type Auth {
  token: ID!
  user: User
}

  type Query {
    categories: [Category]
    items(category: ID, name: String): [Item]
    item(_id: ID!): Item
    me: User
    cart(_id: ID!): Cart
    user(username: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addCart(items: [ID]!): Cart
    updateUser(name: String, email: String, password: String): User
    addUser(username: String!, email: String!, password: String!): Auth
    updateItem(_id: ID!, quantity: Int!): Item
    removeItem(item_Id: ID!): User
  }
  
 

`;

module.exports = typeDefs;
