import Home from './core/Home.jsx';
import Users from './user/Users.jsx';
import  Signup  from './user/Signup.jsx';
import Signin from './auth/Signin.jsx';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default () => {
    return (
        <Routes>
            <Route path="/" element={Home()} />
            <Route path="/users" element={Users()} />
            <Route path="/signup" element={Signup()} />
            <Route path="/signin" element={Signin()} />
        </Routes>
    )
};