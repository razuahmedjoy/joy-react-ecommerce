import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    /* const cartPriceReduce = (prev,current)=>{
        return prev+(current.price * current.quantity)
    }
    const cartShippingReduce = (prev,current)=>prev+current.shipping
 */
    let totalCartPrice = 0;
    let totalShipping = 0
    let quantity = 0

    for(const product of cart){
        quantity += product.quantity;
        totalCartPrice += (product.price)*product.quantity;

        totalShipping += product.shipping

    }
    // console.log(totalCartPrice)

    // tax calculation
    
    let tax = (totalCartPrice * 10/100).toFixed();
  
    const grandTotal = totalCartPrice + totalShipping + parseInt(tax)
  
    return (
        <div className="cart">
            <h2>Order Summery</h2>
            <h4>Selected Items {quantity}</h4>
            <p>Total Price: ${totalCartPrice}</p>
            <p>Total shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;