import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeItemId, saveItemIds } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_ITEM } from '../utils/mutations';

const SavedItems = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeItem, { error }] = useMutation(REMOVE_ITEM);
  const userData = data?.me || {};

  const handleDeleteItem = async (itemId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeItem({
        variables: { itemId },
      });

      removeItemId(itemId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved Items!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedItems.length
            ? `Viewing ${userData.savedItems.length} saved ${userData.savedItems.length === 1 ? 'item' : 'items'}:`
            : 'You have no saved items!'}
        </h2>
        <CardColumns>
          {userData.savedItems.map((item) => {
            return (
              <Card key={item.itemId} border='dark'>
                {item.image ? <Card.Img src={item.image} alt={`The picture for ${item.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <p className='small'>Authors: {item.sellers}</p>
                  <Card.Text>{item.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteItem(item.itemId)}>
                    Delete this Item!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedItems;