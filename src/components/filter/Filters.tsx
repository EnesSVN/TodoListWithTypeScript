import { contextType, todoContext } from "contexts/todoContext";
import { useContext } from "react";
import Filter from "./Filter";

const FILTERS = ["All", "Active", "Completed"];

const Filters = () => {
  const { filter } = useContext(todoContext) as contextType;

  return (
    <ul className="filters" role="radiogroup">
      {FILTERS.map((description) => (
        <li key={description}>
          <Filter description={description} active={description === filter} />
        </li>
      ))}
    </ul>
  );
};

export default Filters;
