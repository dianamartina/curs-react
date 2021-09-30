import React from 'react';
// Atentie! avem si un fisier css
import './ProductItem.css';
import { connect } from "react-redux";
import {addToCart} from '../redux/actions/cart';

function ProductItem(props) {
    // extragem props-urile de interes
    const {name, price, currency, image, addToCartInStore} = props;

    const product = { name, price, currency, image};

    return(
        // Momentan, preview-ul produsului contine imagine, nume si pret
        <div className="product-item col-4 d-flex flex-column align-items-center">
            <img src={image} alt="productPhoto" className="mb-2"/>
            <p className="mb-1 text-center">{ name }</p>
            <p className="text-center">{ price + currency }</p>
            <button 
                className="btn btn-outline-dark" 
                onClick={() => {addToCartInStore(product)}}
                >Adauga in cos</button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCartInStore: (product) => {
            const actionResult = addToCart(product);
            dispatch(actionResult);
            // dispatch(addToCart(product)); // scriere prescurtata
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);