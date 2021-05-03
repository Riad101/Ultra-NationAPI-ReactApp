import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4>Total countries: {cart.length}</h4>
        </div>
    );
};

export default Cart;