import React from 'react';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import { setSearchTerm } from './navigationSlice';

export function SearchBar() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('Search-bar').value;
        dispatch(setSearchTerm(searchTerm));
    }
    return (
       <form onSubmit={handleSubmit}>
            <input id='Search-bar' name='search-term' type='text' placeholder='Search Reddit' />
            <input type='submit' hidden />
       </form> 
    );
};