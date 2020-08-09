import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import AniList from './components/AniList';
import Pagination from '@material-ui/lab/Pagination';
import usePage from './hooks/usePage';

const App = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [animes, getData] = usePage(activePage, searchTerm);

  const changeTerm = (term) => {
    console.log(term)
    setSearchTerm(term)
  }

  const changePage = (event, value) => {
    setActivePage(value);
  }

  return (
    <div>
      <SearchBar onTermSubmit={changeTerm}/>
      <Pagination count={10} page={activePage} onChange={changePage}/>
      <AniList animes={animes}/>
    </div>
    );
}

export default App;
