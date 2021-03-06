import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './reduxStore/store';

import SavedItems from './pages/SavedItems';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
  credentials: 'include'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <Provider store={store}>
        <Navbar />
            <Routes>
              <Route path ="/" element= {<Home/>}/>
              <Route exact path='/saved' element={<SavedItems/>} />
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Routes>
        </Provider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;