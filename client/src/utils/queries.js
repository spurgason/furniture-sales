import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      title
      sellers
      description
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
      sellers
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
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`
;