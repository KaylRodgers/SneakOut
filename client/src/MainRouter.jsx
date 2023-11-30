import Home from './core/Home.jsx';
import Users from './user/Users.jsx';
import Signup from './user/Signup.jsx';
import Signin from './auth/Signin.jsx';
import { Route, Routes, Outlet } from 'react-router-dom';

export default () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/users" Component={Users} />
            <Route path="/signup" Component={Signup} />
            <Route path="/signin" Component={Signin} />
        </Routes>
    )
};