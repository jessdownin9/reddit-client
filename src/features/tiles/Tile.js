import React from 'react';
import './Tiles.css';

export function Tile() {
    return (
        <div className='Tile'>
            <div className='Counter'>
                <img className='Up-arrow' src={require('./Arrow.jpeg')}/>
                <h2>10.3k</h2>
                <img className='Down-arrow' src={require('./Arrow.jpeg')}/>
            </div>
            <h1>What's an annoying thing people base their entire personality around? I can't think of what else to say.</h1>
        </div>
    );
};