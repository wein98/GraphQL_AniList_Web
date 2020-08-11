import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import AniList from './components/AniList';
import Pagination from '@material-ui/lab/Pagination';
import useAnimes from './hooks/useAnimes';

const App = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [animes, pages] = useAnimes(activePage, searchTerm, totalPages);

  const changeTerm = (term) => {
    setSearchTerm(term)
  }

  const changePage = (event, value) => {
    setActivePage(value);
  }

  // totalPages state is used to prevent loading causing the pagination to change weirdly
  // if useAnimes returns a new totalPages value, only changes the pagination
  useEffect (() => {
    setTotalPages(pages)
  }, [pages]) 

  return (
    <div>
      <SearchBar onTermSubmit={changeTerm}/>
      <Pagination className="pagination" count={pages} page={activePage} onChange={changePage}/>
      <AniList animes={animes}/>
      <Pagination className="pagination" count={pages} page={activePage} onChange={changePage}/>
    </div>
    );
}

export default App;
