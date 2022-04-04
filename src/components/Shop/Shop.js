import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

import {addToDb, getStoredCart} from '../../utilities/fakedb'
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const Shop = () => {
    
    const [products,setProducts] = useProducts()

    const [cart,setCart] = useCart(products)





  
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

                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
            </div>
        </div>
    );
};

export default Shop;