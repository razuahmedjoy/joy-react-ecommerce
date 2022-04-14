import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = (props) => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-header header">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <Link className="nav-item" to="/shop">
                                <li className="nav-link">Shop</li>
                            </Link>
                            <Link className="nav-item" to="/orders">
                                <li className="nav-link">Orders</li>
                            </Link>
                            <Link className="nav-item" to="/inventory">
                                <li className="nav-link">Inventory</li>
                            </Link>
                            <Link className="nav-item" to="/shipment">
                                <li className="nav-link">Shipment</li>
                            </Link>

                            <Link className="nav-item" to="/about">
                                <li className="nav-link">About</li>
                            </Link>
                            {
                                user ? <button className="nav-item btn-link" onClick={() => signOut(auth)}>Logout {user.email}
                                </button> : <Link className="nav-item" to="/login">
                                    <li className="nav-link">Login</li>
                                </Link>
                            }


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;