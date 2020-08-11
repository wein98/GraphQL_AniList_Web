import React from 'react';

const AniItem = ({ anime }) => {
    return (
        <div className="ani-item item">
            <img
                alt={anime.title.romaji}
                className="ui image"
                src={anime.coverImage.medium}
            />
            <div className="content">
                <div className="header">{anime.title.romaji}</div>
                <div>Type: {anime.type}</div>
                <div>Average score: {anime.averageScore}</div>
                <div>Popularity: {anime.popularity}</div>
            </div>
        </div>
    )
}

export default AniItem;