import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';

const Main = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    // get data from api
    useEffect(() => {
        fetch("./persons.JSON")
            .then(response => response.json())
            .then(data => setPersons(data));
    }, []);

    // create event handler for Add to Cart button
    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }

    return (
        <div>
            {/* main container */}
            <div className="container main-container mt-3 mb-5">
                <div className="row">
                    {/* ---person container--- */}
                    <div className="col-md-9 person-container">
                        <div className="row">
                            {
                                persons.map(person => <Person
                                    key={person.key}
                                    person={person}
                                    handleAddToCart={handleAddToCart}></Person>)
                            }
                        </div>
                    </div>
                    {/* ---cart container--- */}
                    <div className="col-md-3 cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;