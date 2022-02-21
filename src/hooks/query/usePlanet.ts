import { gql } from "@apollo/client";

const GET_PLANET = gql`
  query GetPlanet($id: ID!) {
    planet(id: $id) {
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      filmConnection {
        films {
          id
          title
          episodeID
        }
      }
    }
  }
`;

export default GET_PLANET;
