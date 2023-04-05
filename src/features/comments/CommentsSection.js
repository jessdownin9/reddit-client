import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, selectComments, selectLoaded } from './commentsSlice';
import { Comment } from './Comment';
import './CommentsSection.css';

export function CommentsSection({post}) {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    let hasLoaded = useSelector(selectLoaded);

    useEffect(() => {
        dispatch(fetchComments({subreddit: post.subreddit_name_prefixed, id: post.id}));
    }, [post, dispatch]);

    return (
        <div className='Comments-section'>
            {hasLoaded && comments[0].map((comment, index) => {
                return <Comment comment={comment} key={index} />;
            })}
        </div>
    );
};