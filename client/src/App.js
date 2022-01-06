import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Nav from './components/Nav';
import Signup from './pages/Signup';
import Login from './pages/Login'

function App() {
  return (
    
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path = "/login" element={<Login/>}/>
            <Route exact path = "/signup" element={<Signup/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
