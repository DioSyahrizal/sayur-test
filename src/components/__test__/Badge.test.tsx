/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { Badge } from "..";

describe("Badge", () => {
  const BadgeContainer = () => <Badge variant="red">Content</Badge>;

  it("render correctly", () => {
    const { container } = render(<BadgeContainer />);
    expect(container).toBeInTheDocument();
  });

  it("render children correctly", () => {
    const { getByText } = render(<BadgeContainer />);
    const content = getByText(/Content/i);
    expect(content).toBeInTheDocument();
  });
});
