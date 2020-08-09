import React from 'react';
import AniItem from './AniItem';

const AniList = ({animes}) => {
    const renderedList = animes.map((anime) => {
        return <AniItem key={anime.id} anime={anime} />
        
    })

    return (
        <div className="ani-list">{renderedList}</div>
    )
}

export default AniList;