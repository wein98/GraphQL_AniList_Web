import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = e => {
        e.preventDefault();
        onTermSubmit(term);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Anime Search</label>
                    <input 
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;