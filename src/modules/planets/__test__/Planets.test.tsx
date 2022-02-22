/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import GET_PLANETS from "../../../hooks/query/usePlanets";
import Planets from "..";
import { waitFor } from "../../../test-utils/waitFor";

const mocks = [
  {
    request: {
      query: GET_PLANETS,
    },
    result: {
      data: {
        allPlanets: {
          planets: [
            {
              id: 1,
              name: "Planet Name",
              diameter: 1000,
              rotationPeriod: 1200,
              gravity: 10,
            },
          ],
        },
      },
    },
  },
];

const PlanetContainer = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <BrowserRouter>
      <Planets />
    </BrowserRouter>
  </MockedProvider>
);

afterEach(cleanup);

describe("Dashboard", () => {
  it("render the title of the page", async () => {
    const { findByText } = render(<PlanetContainer />);
    const title = await waitFor(() => findByText(/Films/i));

    expect(title).toBeInTheDocument();
  });

  it("render the title of the films", async () => {
    const { findByText } = render(<PlanetContainer />);
    const title = await waitFor(() => findByText(/Star Wars Title/i));

    expect(title).toBeInTheDocument();
  });

  it("render the director of the films", async () => {
    const { findByText } = render(<PlanetContainer />);
    const director = await waitFor(() => findByText(/John Doe/i));

    expect(director).toBeInTheDocument();
  });
});
