import React from 'react';
import './Tiles.css';
import { useSelector } from 'react-redux';
import { hasError, isLoading } from './tilesSlice.js';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

export function Tile({ post }) {
    const loading = useSelector(isLoading);
    const threwError = useSelector(hasError);
    const location = useLocation();

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    };
    
    function formatDate(date) {
        return moment.unix(date).fromNow();
    };

    if (loading) return (
        <div className='Tile'>
            <div className='Counter'>
                <img className='Up-arrow' alt='up arrow' src={require('./Arrow.jpeg')}/>
                <h2>0</h2>
                <img className='Down-arrow' alt='down arrow' src={require('./Arrow.jpeg')}/>
            </div>
            <div className='Post'>
                <h1>Loading Content...</h1>
            </div>
        </div>
    );
    
    if (threwError) return (
        <div className='Tile'>
            <div className='Counter'>
                <img className='Up-arrow' alt='up arrow' src={require('./Arrow.jpeg')}/>
                <h2>0</h2>
                <img className='Down-arrow' alt='down arrow' src={require('./Arrow.jpeg')}/>
            </div>
            <div className='Post'>
                <h1>There was an error loading content.</h1>
            </div>
        </div>
    );

    return (
        <Link className={location.pathname === '/Comments' ? 'Tile-disabled' : 'Tile'} to={'Comments'} state={post}>
            <div className='Counter'>
                <img className='Up-arrow' alt='up arrow' src={require('./Arrow.jpeg')}/>
                <h2>{kFormatter(post.ups)}</h2>
                <img className='Down-arrow' alt='down arrow' src={require('./Arrow.jpeg')}/>
            </div>
            <div className='Post'>
                <h3>Posted by {post.author} {formatDate(post.created)}</h3>
                <h1>{post.title}</h1>
                <img className={post.thumbnail_width ? 'Post-image' : 'No-image'} alt={post.title} src={post.thumbnail}/>
                <div className='Comments'>
                    <img className='Comments-icon' alt='comment bubble' src={require('./Comments.png')}/>
                    <div className='Comments-link-container'>
                        <h3 className='Comments-link'>{kFormatter(post.num_comments)} Comments</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};