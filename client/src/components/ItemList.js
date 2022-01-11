import React from 'react';
import { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap';

const ItemList = ({ items }) => {
  if (!items.length) {
    return <h3>There are no items in this library!</h3>;
  }

  return (
    <div>
      {items &&
        items.map((item) => (
          <Card outline color='secondary' key={item._id}>
            <CardHeader>Name: {item.name}</CardHeader>
            <CardBody>
              <CardTitle>Sellers: {item.sellers}</CardTitle>
              <CardText>Description: {item.description}</CardText>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default ItemList;
