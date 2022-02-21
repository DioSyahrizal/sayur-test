/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFilm
// ====================================================

export interface GetFilm_film_characterConnection_characters {
  __typename: "Person";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this person.
   */
  name: string | null;
}

export interface GetFilm_film_characterConnection {
  __typename: "FilmCharactersConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters: (GetFilm_film_characterConnection_characters | null)[] | null;
}

export interface GetFilm_film_planetConnection_planets {
  __typename: "Planet";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this planet.
   */
  name: string | null;
}

export interface GetFilm_film_planetConnection {
  __typename: "FilmPlanetsConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets: (GetFilm_film_planetConnection_planets | null)[] | null;
}

export interface GetFilm_film {
  __typename: "Film";
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The episode number of this film.
   */
  episodeID: number | null;
  /**
   * The opening paragraphs at the beginning of this film.
   */
  openingCrawl: string | null;
  /**
   * The name of the director of this film.
   */
  director: string | null;
  /**
   * The name(s) of the producer(s) of this film.
   */
  producers: (string | null)[] | null;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate: string | null;
  characterConnection: GetFilm_film_characterConnection | null;
  planetConnection: GetFilm_film_planetConnection | null;
}

export interface GetFilm {
  film: GetFilm_film | null;
}

export interface GetFilmVariables {
  id: string;
}
