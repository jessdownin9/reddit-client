import React from 'react';
import { SearchBar } from './SearchBar';
import './Navigation.css';

export function Navigation() {
    return (
        <div className='Navigation-bar'>
            <img className='Logo' src={require('./Reddit-Logo.png')} alt='Reddit logo' />
            <SearchBar />
        </div>
    );
};

