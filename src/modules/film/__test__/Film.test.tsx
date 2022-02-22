/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import { MockedProvider } from "@apollo/client/testing";
import GET_FILM from "../../../hooks/query/useFilm";
import Film from "..";
import { waitFor } from "../../../test-utils/waitFor";

const mocks = [
  {
    request: {
      query: GET_FILM,
      variables: {
        id: "abc123",
      },
    },
    result: {
      data: {
        film: {
          title: "Star Wars Part 1",
          episodeID: 1,
          openingCrawl: "Description",
          director: "John Doe",
          producers: ["Borg, Mills"],
          releaseDate: "1-1-1970",
          characterConnection: {
            characters: [
              {
                id: 1,
                name: "Luke",
              },
            ],
          },
          planetConnection: {
            planets: [
              {
                id: 1,
                name: "Earth",
              },
            ],
          },
        },
      },
    },
  },
];

const FilmContainer = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <BrowserRouter>
      <Film />
    </BrowserRouter>
  </MockedProvider>
);

afterEach(cleanup);

describe("Film", () => {
  it("render the director of the films", async () => {
    const { findByText } = render(<FilmContainer />);
    const director = await waitFor(() => findByText(/Star Wars Part 1/i));

    expect(director).toBeInTheDocument();
  });
});
