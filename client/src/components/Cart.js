import React, { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import CartItem from './CartItem';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import Auth from '../utils/auth';
import "../cart.css"
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { useSelector, useDispatch } from 'react-redux';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, items: [...cart] });
    };

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="trash">🛒</span>
      </div>
    );
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const itemIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        itemIds.push(item._id);
      }
    });

    getCheckout({
      variables: { items: itemIds }
    });
  }
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
        🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        X
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong><br></br>

            {Auth.loggedIn() ? (
              <button className='btn btn-primary btn-sm' onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="sad">
          </span>
          Cart is empty!
        </h3>
      )}
    </div>
  );
}

export default Cart;