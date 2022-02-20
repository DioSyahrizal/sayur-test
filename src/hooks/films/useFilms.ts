import { gql } from "@apollo/client";

const GET_FILMS = gql`
  query GetFils {
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

export interface Films {
  allFilms: Film[];
}

interface Film {
  totalCount: number;
}

export default GET_FILMS;
