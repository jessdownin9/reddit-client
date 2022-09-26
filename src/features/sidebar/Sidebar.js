import React from 'react';
import { Subreddit } from './Subreddit';
import './Sidebar.css';

export function Sidebar() {
    return (
        <div className='Sidebar'>
            <h1>Subreddits</h1>
            <Subreddit />
        </div>
    );
};