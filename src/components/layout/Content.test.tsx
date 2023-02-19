import { render, screen } from "@testing-library/react";
import Content from "./Content";

test("Ensure content renders as a <section> with every information + children", () => {
  render(<Content>Hello World</Content>);

  const content = screen.getByRole("main");

  expect(content).toBeInTheDocument();
  expect(content).toMatchInlineSnapshot(`
  <section
    class="main"
    role="main"
  >
    Hello World
  </section>
  `);
});
