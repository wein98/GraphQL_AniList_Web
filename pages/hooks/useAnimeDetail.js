import { gql, useQuery } from '@apollo/client';

const GET_ANIME_DETAILS = gql `
    query ($id: Int, $page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
        media (id: $id) {
            id
            title {
                romaji
            }
            coverImage {
                large
            }
            type
            popularity
            averageScore
            description
            episodes
            characters {
                edges {
                    id
                }
            }
        }
    }
}`;

const useAnimeDetails = (mediaId) => {
    const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
        variables: {
            id: mediaId
        }
    })

    if (loading) return null;
    if (error) return `Error! ${error.message}`;

    return data.Page.media[0]
}

export default useAnimeDetails;