import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

import {addToDb, getStoredCart} from '../../utilities/fakedb'

const Shop = () => {
    
    const [products,setProducts] = useState([])

    const [cart,setCart] = useState([]);



    useEffect(() =>{
        // console.log('products before fetch',products);
        fetch('products.json')
        .then(res=> res.json())
        .then(products => {
            setProducts(products);
            // console.log("products loaded",products);
        })
    },[])

    useEffect(() =>{
        console.log('local storage first line')

        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart);
        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                
                savedCart.push(addedProduct);

                
            }


        }
        console.log(savedCart);
        setCart(savedCart);
        console.log("local storage finished")
    },[products])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        // cart.push(product) // but we should not use like this
        
        let newCart = [];

        const exists = cart.find(product => product.id === selectedProduct.id)

        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }else{

            const rest = cart.filter(product=> product.id !== selectedProduct.id)
            exists.quantity += 1;

            newCart = [...rest,exists]
        }

        // use this to add new element to an array
        
        setCart(newCart);
        console.log(newCart);

        // set to local storage or add to database
        addToDb(selectedProduct.id);
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

                <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Shop;