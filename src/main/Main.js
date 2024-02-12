import React from 'react';
import Nav from '../navbar/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;