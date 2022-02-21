import { gql } from "@apollo/client";

const GET_PLANETS = gql`
  query GetPlanets {
    allPlanets {
      planets {
        id
        name
        diameter
        rotationPeriod
        gravity
      }
    }
  }
`;

export default GET_PLANETS;
