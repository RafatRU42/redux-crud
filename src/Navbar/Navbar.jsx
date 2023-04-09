import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link className='navbar' to='/'>Home</Link>
            <Link className='navbar' to='/show-book'>Show Book</Link>
            <Link className='navbar' to='/add-book'>Add Book</Link>
            <Link className='navbar' to='/edit-book'>Edit Book</Link>
        </div>
    );
};

export default Navbar;