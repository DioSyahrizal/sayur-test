/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Dashboard from "..";
import GET_FILMS from "../../../hooks/query/useFilms";
import { waitFor } from "../../../test-utils/waitFor";

const mocks = [
  {
    request: {
      query: GET_FILMS,
    },
    result: {
      data: {
        allFilms: {
          totalCount: 1,
          films: [
            {
              title: "Star Wars Title",
              episodeID: 1,
              openingCrawl: "Description",
              director: "John Doe",
              producers: ["Borg"],
              releaseDate: "1-1-1970",
              id: 1,
            },
          ],
        },
      },
    },
  },
];

const DashboardContainer = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  </MockedProvider>
);

afterEach(cleanup);

describe("Dashboard", () => {
  it("render the title of the page", async () => {
    const { findByText } = render(<DashboardContainer />);
    const title = await waitFor(() => findByText(/Films/i));

    expect(title).toBeInTheDocument();
  });

  it("render the title of the films", async () => {
    const { findByText } = render(<DashboardContainer />);
    const title = await waitFor(() => findByText(/Star Wars Title/i));

    expect(title).toBeInTheDocument();
  });

  it("render the director of the films", async () => {
    const { findByText } = render(<DashboardContainer />);
    const director = await waitFor(() => findByText(/John Doe/i));

    expect(director).toBeInTheDocument();
  });
});
