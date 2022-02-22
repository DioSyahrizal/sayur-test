/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { GridLayout } from "..";

describe("GridLayout", () => {
  const GridContainer = () => <GridLayout>Content</GridLayout>;

  it("render correctly", () => {
    const { container } = render(<GridContainer />);
    expect(container).toBeInTheDocument();
  });

  it("render children correctly", () => {
    const { getByText } = render(<GridContainer />);
    const content = getByText(/Content/i);
    expect(content).toBeInTheDocument();
  });
});
