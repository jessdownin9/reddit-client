import { Outlet } from "react-router-dom";
import React from 'react';
import './Layout.css';

export const Layout = () => {
    return (
        <div className="App">
            <section className="Main">
                <Outlet />                
            </section>
        </div>
    )
};

export default Layout;
