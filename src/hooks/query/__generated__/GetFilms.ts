/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFilms
// ====================================================

export interface GetFilms_allFilms_films {
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
  /**
   * The ID of an object
   */
  id: string;
}

export interface GetFilms_allFilms {
  __typename: "FilmsConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: number | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (GetFilms_allFilms_films | null)[] | null;
}

export interface GetFilms {
  allFilms: GetFilms_allFilms | null;
}
