import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    const { name, img, specialist, graduatedFrom, researchPublished, salary } = props.person || {};
    const cartIcon = <FontAwesomeIcon className="iconStyle" icon={faShoppingCart} />
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img src={img} className="card-img-top rounded" alt="" />
                <div className="card-body">

                    <div className="card-text">
                        <h6 className="fw-bold mt-3">Name: {name}</h6>
                        <p><span className="field-style">Specialist</span>: {specialist}</p>
                        <p><span className="field-style">Graduated From: </span>{graduatedFrom}</p>
                        <p><span className="field-style">Research Published: </span>{researchPublished}</p>
                        <p><span className="field-style">Salary: $</span>{salary}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={() => props.handleAddToCart(props.person)} className="btn btn-primary w-100">{cartIcon}Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Person;