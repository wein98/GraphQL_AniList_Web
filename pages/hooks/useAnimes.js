import { gql, useQuery } from '@apollo/client';

const GET_ANIMES = gql`
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

const useAnimes = (activePage, term, totalPages) => {
    // catch if term is "" will cause API to run into error
    if (term === "") {
        term = null
    }
    
    const { loading, error, data } = useQuery(GET_ANIMES, {
        variables: {
            search: term,
            page: activePage,
            perPage: 20
        }
    });

    // loading will always receive totalPages from before calling API to avoid weird changing in the pagination
    if (loading) return [[], totalPages];
    if (error) return `Error! ${error.message}`;

    // States are not used here because there is an error for multiple rerender, NOT SURE WHY
    // setAnimes(data.Page.media);
    // setTotalPages(data.Page.pageInfo.lastPage);

    return [data.Page.media, data.Page.pageInfo.lastPage]
}

export default useAnimes;