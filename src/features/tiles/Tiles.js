import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tile } from './Tile.js';
import { fetchPosts, selectPosts, selectLoaded, fetchSearchTerm } from './tilesSlice';
import './Tiles.css';
import { selectSubreddit } from '../sidebar/sidebarSlice.js';
import { selectSearchTerm } from '../navigation/navigationSlice.js';

export function Tiles() {
    const dispatch = useDispatch();
    let hasLoaded = useSelector(selectLoaded);
    const posts = useSelector(selectPosts);
    const subreddit = useSelector(selectSubreddit);
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        if (searchTerm) {
            dispatch(fetchSearchTerm(searchTerm));
        } else {
            dispatch(fetchPosts(subreddit));
        }
    }, [searchTerm, subreddit, dispatch]);

    return (
        <div className='Tiles'>
            {hasLoaded && posts[0].map((post, index) => {
                return <Tile post={post} key={index} />;
            })}
        </div>
    );
};