import { gql } from "@apollo/client";

const GET_PERSON = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      species {
        name
      }
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

export default GET_PERSON;
