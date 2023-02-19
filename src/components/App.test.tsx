import { render, screen } from "@testing-library/react";
import App from "./App";

test("Ensure app renders an header 'ToDo'", () => {
  render(<App />);

  const header = screen.getByText(/ToDo/i);
  expect(header).toBeInTheDocument();
});
