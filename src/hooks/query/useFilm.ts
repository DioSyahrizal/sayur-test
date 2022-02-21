import { gql } from "@apollo/client";

const GET_FILM = gql`
  query GetFilm($id: ID!) {
    film(id: $id) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
      characterConnection {
        characters {
          id
          name
        }
      }
      planetConnection {
        planets {
          id
          name
        }
      }
    }
  }
`;

export default GET_FILM;
