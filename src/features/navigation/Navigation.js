import React from 'react';
import { SearchBar } from './SearchBar';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { setSubreddit } from '../sidebar/sidebarSlice';
import { setSearchTerm } from './navigationSlice';
import { useDispatch } from 'react-redux';

export function Navigation() {
    const dispatch = useDispatch();
    const handleClick = (value) => {
        dispatch(setSearchTerm(null));
        dispatch(setSubreddit(value));
    };

    return (
        <div className='Navigation-bar'>
            <Link to={'/'} onClick={() => handleClick('popular')}>
            <img className='Logo' src={require('./Reddit-Logo.png')} alt='Reddit logo' />
            </Link>
            <SearchBar />
        </div>
    );
};

