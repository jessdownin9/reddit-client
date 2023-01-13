import React from 'react';
import { Subreddit } from './Subreddit';
import './Sidebar.css';

export function Sidebar() {
    return (
        <div className='Sidebar'>
            <h1>Subreddits</h1>
            <Subreddit name='Popular' value='popular'/>
            <Subreddit name='Bachelor Nation' value='BachelorNation' />
            <Subreddit name='Tracer Mains' value='TracerMains' />
            <Subreddit name='World News' value='worldnews' />
        </div>
    );
};