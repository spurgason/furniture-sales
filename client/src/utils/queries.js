import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      name
      description
      image
      category {
        _id
      }
      price
      quantity
    }
  }
`;

export const GET_ME = gql`
  query users {
    _id
    username
    email
    itemCount
    savedItems{
      itemId
      name
      description
      title
      image
    }
  }
`

export const QUERY_CATEGORIES = gql`
    {
      categories {
      _id
      name
    }
  }
`
export const QUERY_CHECKOUT = gql`
  query getCheckout($items: [ID]!) {
    checkout(items: $items) {
      session
    }
  }
`
;