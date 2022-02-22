/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "..";

describe("Header", () => {
  const HeaderContainer = () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  it("render correctly", () => {
    const { container } = render(<HeaderContainer />);
    expect(container).toBeInTheDocument();
  });

  it("render children correctly", () => {
    const { getByText } = render(<HeaderContainer />);
    const content = getByText(/Movies/i);
    expect(content).toBeInTheDocument();
  });
});
