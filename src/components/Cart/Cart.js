import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const person of cart) {
        total = total + person.salary;
    }

    return (
        <div>
            <h4>Scientist Added: {cart.length}</h4>
            <h4>Total Cost: ${total}</h4>
            <h4 className="mt-5">Scientist List-</h4>
            <ul className="list-group list-group-bullet list-group-item-success ms-4">
                {
                    cart.map(person => <li className="p-1" >{person.name}</li>)
                }
            </ul>

        </div>
    );
};

export default Cart;