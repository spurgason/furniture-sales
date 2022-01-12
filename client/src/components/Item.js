import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from "../utils/helpers";
import { useDispatch, useSelector } from 'react-redux';


function Item(item) {
    const {
        image,
        name,
        _id,
        price,
        description,
        quantity
    } = item;

    const state = useSelector((state) => {
        return state
    });

    const dispatch = useDispatch();


    const { cart } = state;

    const addToCart = () => {
        // find the cart item with the matching id
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);

        // if there was a match, call UPDATE with a new purchase quantity
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                item: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    };


    return (
        <div className="card text-center m-3" style={{ width: '28rem' }}>
            <div className="card-header">
                {name}
            </div>
            <Link to={`/item/${_id}`}>
                <img
                    alt={name}
                    src={`../images/${image}`}
                    
                />

            </Link>
            <div className="card-Body">
                <p>{description}</p>
                <div>{quantity} {pluralize("item", quantity)} in stock</div>
                <span>${price}</span>
            </div>
            <button className="btn btn-primary pb-2" onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default Item;
