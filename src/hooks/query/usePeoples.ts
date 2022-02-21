import { gql } from "@apollo/client";

const GET_PEOPLES = gql`
  query GetPeoples {
    allPeople {
      people {
        id
        name
        birthYear
        eyeColor
        gender
      }
    }
  }
`;

export default GET_PEOPLES;
