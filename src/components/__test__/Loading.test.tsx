/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { Loading } from "..";

describe("Loading", () => {
  const LoadingContainer = () => <Loading />;

  it("render correctly", () => {
    const { container } = render(<LoadingContainer />);
    expect(container).toBeInTheDocument();
  });

  it("render children correctly", () => {
    const { getByText } = render(<LoadingContainer />);
    const content = getByText(/Loading/i);
    expect(content).toBeInTheDocument();
  });
});
