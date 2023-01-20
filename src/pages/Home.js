import React from 'react';
import { Sidebar } from '../features/sidebar/Sidebar';
import { Tiles } from '../features/tiles/Tiles.js';

const Home = () => {
    return (
        <section className="Main">
            <Tiles />
            <Sidebar />
        </section>
    )
};

export default Home;
