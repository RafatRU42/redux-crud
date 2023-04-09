import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './ErrorPage';
import Navbar from './Navbar/Navbar';

const Indexe = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>} />
                    <Route path='*' element={<ErrorPage></ErrorPage>} />
                    <Route path='/show-book' element={<ErrorPage></ErrorPage>} />
                    <Route path='/add-book' element={<ErrorPage></ErrorPage>} />
                    <Route path='/edit-book' element={<ErrorPage></ErrorPage>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Indexe;