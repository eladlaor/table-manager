import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders with the expected text", () => {
  render(<App />);
  const cemento = screen.getByText(/a Cemento task/);
  expect(cemento).toBeInTheDocument();
  const eladLaor = screen.getByText(/double click on a cell to edit it/i);
  expect(eladLaor).toBeInTheDocument();
});
