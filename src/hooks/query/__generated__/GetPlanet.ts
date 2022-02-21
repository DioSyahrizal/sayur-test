/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlanet
// ====================================================

export interface GetPlanet_planet_filmConnection_films {
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

export interface GetPlanet_planet_filmConnection {
  __typename: "PlanetFilmsConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (GetPlanet_planet_filmConnection_films | null)[] | null;
}

export interface GetPlanet_planet {
  __typename: "Planet";
  /**
   * The name of this planet.
   */
  name: string | null;
  /**
   * The diameter of this planet in kilometers.
   */
  diameter: number | null;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod: number | null;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod: number | null;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity: string | null;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population: number | null;
  /**
   * The climates of this planet.
   */
  climates: (string | null)[] | null;
  /**
   * The terrains of this planet.
   */
  terrains: (string | null)[] | null;
  filmConnection: GetPlanet_planet_filmConnection | null;
}

export interface GetPlanet {
  planet: GetPlanet_planet | null;
}

export interface GetPlanetVariables {
  id: string;
}
