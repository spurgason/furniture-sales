import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../utils/queries';
import ItemList from '../components/ItemList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const items = data?.items || [];

  return (
    <main>
      <div>{loading ? <div>Loading...</div> : <ItemList items={items} />}</div>
    </main>
  );
};

export default Home;
