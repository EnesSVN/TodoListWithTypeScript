import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Ensure header renders as a <header> with every information + children", () => {
  render(<Header>Hello World</Header>);

  const header = screen.getByRole("banner");

  expect(header).toBeInTheDocument();
  expect(header).toMatchInlineSnapshot(`
  <header
    class="header"
  >
    Hello World
  </header>
  `);
});
