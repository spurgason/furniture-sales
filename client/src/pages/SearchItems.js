import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { saveItemIds, getSavedItemIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_ITEM } from '../utils/mutations';

const SearchItems = () => {
  const [searchedItems, setSearchedItem] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedItemIds, setSavedItemIds] = useState(getSavedItemIds());

  const [saveItem, { error }] = useMutation(SAVE_ITEM);

  useEffect(() => {
    return () => saveItemIds(savedItemIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { results } = await response.json();

      const itemData = results.map((item) => ({
        itemId: item.id,
        sellers: item.sellers || ['No author to display'],
        title: item.title,
        description: item.description,
        image: item.image || '',
      }));

      setSearchedItems(itemData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveItem = async (itemId) => {
    const itemToSave = searchedItems.find((item) => item.itemId === itemId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveItem({
        variables: { newItem: { ...itemToSave } },
      });

      setSavedItemIds([...savedItemIds, itemToSave.itemId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for ITems!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a book'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedItems.length
            ? `Viewing ${searchedItems.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <CardColumns>
          {searchedItems.map((item) => {
            return (
              <Card key={item.itemId} border='dark'>
                {item.image ? (
                  <Card.Img src={item.image} alt={`The picture for ${item.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <p className='small'>Authors: {item.authors}</p>
                  <Card.Text>{item.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedItemIds?.some((savedItemId) => savedItemId === item.itemId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveItem(item.itemId)}>
                      {savedItemIds?.some((savedItemkId) => savedItemId === item.itemId)
                        ? 'This item has already been saved!'
                        : 'Save this Item!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchItems;