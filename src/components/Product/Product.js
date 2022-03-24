import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const { name, img, seller, price, ratings } = props.product;
    const{handleAddToCart} = props;
    
    return (
        <div className="product col-md-4 my-2">

            <div className="product-card position-relative">
                <img src={img} alt={name} className="img-fluid" />
                <div className="product-info">
                    <p className="product-name my-3">{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
                <p onClick={()=>handleAddToCart(props.product)} className="bottom-0 btn-buynow m-0 position-absolute">Add to Cart
                <FontAwesomeIcon className="cart-icon" icon={faShoppingCart}></FontAwesomeIcon>
                </p>
            </div>

        </div>
    );
};

export default Product;