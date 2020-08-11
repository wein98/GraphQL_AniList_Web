import React from 'react';
import AniItem from './AniItem';

const AniList = ({animes}) => {
    if (animes) {
        const renderedList = animes.map((anime) => {
            return <AniItem key={anime.id} anime={anime} />
            
        })
    
        return (
            <div className="ani-list">{renderedList}</div>
        )
    }
    return <div>Loading...</div>
}

export default AniList;