import React from 'react';
import CharItem from './CharItem';

const CharList = ({charList}) => {
    const renderedList = charList.map((char) => {
        return <CharItem charId={char.id} />
    })
    
    if (charList) {
        return (
            <div>{renderedList}</div>
        )
    }
    return <div>Loading...</div>
}

export default CharList;