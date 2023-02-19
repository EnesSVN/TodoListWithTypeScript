import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

test("Ensure filter renders as an <a> with every information", () => {
  render(<Filter active description="All" />);

  const filter = screen.getByRole("button");

  expect(filter).toBeInTheDocument();
  expect(filter).toMatchInlineSnapshot(`
  <button
    class="selected"
    disabled=""
  >
    All
  </button>
  `);
});
