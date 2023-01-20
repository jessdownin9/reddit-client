import React from 'react';
import { Sidebar } from '../features/sidebar/Sidebar';
import { Tile } from '../features/tiles/Tile.js';
import { useLocation } from 'react-router-dom';
import { CommentsSection } from '../features/comments/CommentsSection';
import '../features/comments/CommentsSection.css';

export function Comments() {
    const location = useLocation();
    const post = location.state;
    return (
        <section className='Main'>
            <div className='Tiles'>
                <Tile className='Tile' post={post} />
                <div className='Comments-tile'>
                    <CommentsSection post={post} />
                </div>
            </div>
            <Sidebar />
        </section>
    )
};
