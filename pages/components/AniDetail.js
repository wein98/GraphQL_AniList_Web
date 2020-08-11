import React from 'react';
import { useRouter } from 'next/router';
import useAnimeDetail from '../hooks/useAnimeDetail';
import CharList from './CharList';

const AniDetail = () => {
    const router = useRouter();
    const detail = useAnimeDetail(parseInt(router.query.mediaId, 10))

    if (detail) {
        return (
            <div>
                <div className="ani-detail">
                    <img
                        alt={detail.title.romaji}
                        className="ui image"
                        src={detail.coverImage.large}
                    />
                    <div style={{margin: "20px"}}>
                        <div className="detail-title">{detail.title.romaji}</div>
                        <div>Type: {detail.type}</div>
                        <div>Average score: {detail.averageScore}</div>
                        <div>Popularity: {detail.popularity}</div>
                        <div style={{margin: "30px"}}>{detail.description}</div>
                    </div>
                </div>
                <div className="ani-chars">
                    <h1 style={{margin: "20px"}}>Characters</h1>
                    <CharList charList={detail.characters.edges} />
                </div>
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

export default AniDetail;