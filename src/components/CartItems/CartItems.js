import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItems.css';

const CartItems = ({ product,handleRemoveProduct }) => {
    console.log(product)
    return (
        <div className="cart-items">
            <div>
                <img src={product.img} alt="" className="cart-img" />

            </div>
            <div className="item-details">

                <div className="details">
                    <h4>{product.name.length > 20 ? product.name.slice(0,8) +'...': product.name}</h4>
                    <p>${product.price}</p>
                    <p>quantity: {product.quantity}</p>
                </div>

                <div className="">
                    <button onClick={()=>handleRemoveProduct(product)} className="deleteBtn">
                        <FontAwesomeIcon className="deleteIcon" icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CartItems;