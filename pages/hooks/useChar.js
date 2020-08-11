import { gql, useQuery } from '@apollo/client';

const GET_CHAR_DETAIL = gql `
    query ($id: Int) {
        Page {
            characters (id: $id) {
                id
                name {
                    full
                    native
                }
                description
                image {
                    medium
                }
            }
        }
    }`;

const useCharDetail = (charId) => {
    const { loading, error, data } = useQuery(GET_CHAR_DETAIL, {
        variables: {
            id: charId
        }
    })

    if (loading) return null;
    if (error) return `Error! ${error.message}`;

    return data.Page.characters[0];
}

export default useCharDetail;