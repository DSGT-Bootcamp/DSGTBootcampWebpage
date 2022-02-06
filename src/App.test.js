import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders dsgt bootcamp link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Data Science at Georgia Tech Bootcamp/i
  );
  expect(linkElement).toBeInTheDocument();
});
