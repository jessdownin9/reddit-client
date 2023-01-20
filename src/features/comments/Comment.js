import React from 'react';
import { useSelector } from 'react-redux';
import { hasError, isLoading } from './commentsSlice';
import '../comments/CommentsSection.css';
import moment from 'moment';

export function Comment({ comment }) {
    const loading = useSelector(isLoading);
    const threwError = useSelector(hasError);

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    };

    function formatDate(date) {
        return moment.unix(date).fromNow();
    }

    if (loading) return (
        <div className='Comment'>
            <p className='Comment-body'>Loading Comment...</p>
        </div>
    );

    if (threwError) return (
        <div className='Comment'>
            <p className='Comment-body'>Error loading comment.</p>
        </div>
    );

    return (
        <div className='Comment'>
            <div className='Comment-info'>
                <h3 className='Comment-author'>{comment.author}</h3>
                <h3>{formatDate(comment.created)}</h3>
            </div>
            <h1 className='Comment-body'>{comment.body}</h1>
            <div className='Comment-counter'>
                <img className='Comment-up-arrow' alt='up arrow' src={require('../tiles/Arrow.jpeg')}/>
                <h2>{kFormatter(comment.ups)}</h2>
                <img className='Comment-down-arrow' alt='down arrow' src={require('../tiles/Arrow.jpeg')}/>
            </div>
        </div>
    );
};