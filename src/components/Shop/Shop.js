import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [products,setProducts] = useState([])

    const [cart,setCart] = useState([]);



    useEffect(() =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(products => setProducts(products))
    },[])

    const handleAddToCart = (product) => {
        // console.log(product);
        // cart.push(product) // but we should not use like this

        // use this to add new element to an array

        const newCart = [...cart,product];
        setCart(newCart);
        console.log(newCart);
    }

    return (

        <div className="container-fluid">
            <div className="row mx-auto">
            <div className="products-container px-3 col-md-8 my-2">
                <div className="row mx-auto">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        >

                        </Product>)

                }
                </div>
            </div>
            <div className="cart-container col-md-4">

                <h2>Order Summery</h2>
                <h4>Selected Items {cart.length}</h4>
                <div>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Shop;