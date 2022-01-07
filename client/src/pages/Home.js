import React from "react";
import Cart from "../components/Cart";
import Nav from "../components/Nav";

const Home = () => {
    return (
      <div className="container">
          <Nav />
        <Cart />
      </div>
    );
  };

export default Home;