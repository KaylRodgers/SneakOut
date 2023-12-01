import Home from './core/Home.js';
import Users from './user/Users.js';
import Signup from './user/Signup.js';
import Signin from './user/Signin.js';
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