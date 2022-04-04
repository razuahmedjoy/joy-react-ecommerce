import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div>
            <h1 className="my-5">Page can not be found</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFound404;