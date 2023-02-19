import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Ensure footer renders as a <footer> with every information + children", () => {
  render(<Footer>Hello World</Footer>);

  const footer = screen.getByRole("contentinfo");

  expect(footer).toBeInTheDocument();
  expect(footer).toMatchInlineSnapshot(`
  <footer
    class="footer"
  >
    Hello World
  </footer>
  `);
});
