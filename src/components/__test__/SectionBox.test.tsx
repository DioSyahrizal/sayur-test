/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { SectionBox } from "..";

describe("SectionBox", () => {
  const SectionBoxContainer = () => <SectionBox>Content</SectionBox>;

  it("render correctly", () => {
    const { container } = render(<SectionBoxContainer />);
    expect(container).toBeInTheDocument();
  });

  it("render children correctly", () => {
    const { getByText } = render(<SectionBoxContainer />);
    const content = getByText(/Content/i);
    expect(content).toBeInTheDocument();
  });
});
