import { render, screen } from "@testing-library/react";
import Filters from "./Filters";

test("Ensure filters renders the correct number of filters", () => {
  const filters = [
    { key: 1, filter: () => {}, description: "All" },
    { key: 2, filter: () => {}, description: "Active" },
    { key: 3, filter: () => {}, description: "Completed" },
  ];

  // render(<Filters filters={filters} activeFilterKey={1} />);

  const elements = screen.getAllByRole("button");
  expect(elements.length).toEqual(3);
});
