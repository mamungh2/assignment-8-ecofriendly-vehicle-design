import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.salary;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div className="cart-style p-3 mt-3 rounded sticky-top">
            <h4>Scientist Added: {cart.length}</h4>
            <h4>Total Cost: ${total}</h4>
            <h4 className="mt-5">Scientist List-</h4>
            <ul className="list-group list-group-bullet list-group-item-success ms-4">
                {
                    cart.map(person => <li className="p-1" key={person.key}>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;