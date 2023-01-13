import React from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { setSubreddit } from './sidebarSlice';
import { setSearchTerm } from '../navigation/navigationSlice';

export function Subreddit({ name, value }) {
    const dispatch = useDispatch();
    const handleClick = (value) => {
        dispatch(setSearchTerm(null));
        dispatch(setSubreddit(value));
    };

    return (
        <div className='Subreddit' value={value} onClick={() => handleClick(value)}>
            <h2>{name}</h2>
        </div>
    );
};