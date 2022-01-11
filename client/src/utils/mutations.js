import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
        }
    }
  }
`;

export const SAVE_ITEM = gql`
  mutation saveItem($newItem: InputItem!) {
    saveItem(newItem: $newItem) {
      _id
      username
      email
      savedItems {
        itemId
        name
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: ID!) {
    removeItem(itemId: $itemId) {
      _id
      username
      email
      savedItems {
        itemId
        name
        description
        title
        image
        link
      }
    }
  }
`;