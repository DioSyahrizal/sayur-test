/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPerson
// ====================================================

export interface GetPerson_person_species {
  __typename: "Species";
  /**
   * The name of this species.
   */
  name: string | null;
}

export interface GetPerson_person_filmConnection_films {
  __typename: "Film";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The episode number of this film.
   */
  episodeID: number | null;
}

export interface GetPerson_person_filmConnection {
  __typename: "PersonFilmsConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (GetPerson_person_filmConnection_films | null)[] | null;
}

export interface GetPerson_person {
  __typename: "Person";
  /**
   * The name of this person.
   */
  name: string | null;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: string | null;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor: string | null;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender: string | null;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor: string | null;
  /**
   * The height of the person in centimeters.
   */
  height: number | null;
  /**
   * The mass of the person in kilograms.
   */
  mass: number | null;
  /**
   * The species that this person belongs to, or null if unknown.
   */
  species: GetPerson_person_species | null;
  filmConnection: GetPerson_person_filmConnection | null;
}

export interface GetPerson {
  person: GetPerson_person | null;
}

export interface GetPersonVariables {
  id: string;
}
