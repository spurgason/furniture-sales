import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
