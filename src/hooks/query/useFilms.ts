import { gql } from "@apollo/client";

const GET_FILMS = gql`
  query GetFilms {
    allFilms {
      totalCount
      films {
        title
        episodeID
        openingCrawl
        director
        producers
        releaseDate
        id
      }
    }
  }
`;

export default GET_FILMS;
