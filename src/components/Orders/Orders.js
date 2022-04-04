import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartItems from '../CartItems/CartItems';
import './Orders.css';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)


    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)    
    }
    // console.log(products, setProducts);

    return (
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="products-container px-3 col-md-8 my-2">
                    <div className="row mx-auto">
                        {
                            cart.map(item => <CartItems handleRemoveProduct={handleRemoveProduct} product= {item} key={item.id}></CartItems>)
                        }
                    </div>
                </div>
                <div className="cart-container col-md-4">
                <Cart cart={cart}>
                    <Link to="/inventory" className="btn checkout">
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>
                   
                </div>
            </div>
        </div>
    );
};

export default Orders;