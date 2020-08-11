import React from 'react';
import useChar from '../hooks/useChar';
import useCharDetail from '../hooks/useChar';

const CharItem = (charData) => {
    const data = useCharDetail(charData.charId)

    if (data) {
        return (
            <div className="ani-detail">
                <img
                    alt={data.name.full}
                    src={data.image.medium}
                />
                <div style={{margin: "20px"}}>
                    <h2>{data.name.full} {data.name.native}</h2>
                    <div>{data.description}</div>
                </div>
            </div>
        )
    }
    return <div></div>
}

export default CharItem;