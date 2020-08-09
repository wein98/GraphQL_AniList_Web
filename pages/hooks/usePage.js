import { useState, useEffect } from 'react';

const usePage = (activePage, term) => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        if (term === "") {
            term = null
        }
        getData();
    }, [activePage, term])

    const getData = async() => {
        var query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
                Page (page: $page, perPage: $perPage) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                }
                media (id: $id, search: $search) {
                    id
                    title {
                    romaji
                    }
                    coverImage {
                    medium
                    }
                    type
                    popularity
                    averageScore
                }
                }
            }`;
    
        var url = 'https://graphql.anilist.co',
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    variables: {
                        search: term,
                        page: activePage,
                        perPage: 20
                    }
                })
            };
    
        function handleResponse(response) {
            return response.json().then(function (json) {
                return response.ok ? json : Promise.reject(json);
            });
        }
    
        var res = null;
    
        function handleData(data) {
            res = data.data.Page.media;
        }
    
        function handleError(error) {
            alert('Error, check console');
            console.error(error);
        }
    
        const x = await fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
        
        setAnimes(res);
      }

      return [animes, getData];
}

export default usePage;