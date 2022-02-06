import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders dsgt bootcamp link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Georgia Tech/i
  );
  expect(linkElement).toBeInTheDocument();
});
