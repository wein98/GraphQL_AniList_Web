import React from 'react';
import Link from "next/link";

const AniItem = ({ anime }) => {
    return (
        <Link
            href={{
                pathname: "/components/AniDetail",
                query: { mediaId: anime.id }
            }}>
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
        </Link>
    )
}

export default AniItem;