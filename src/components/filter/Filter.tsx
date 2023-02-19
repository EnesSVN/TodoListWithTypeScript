import { contextType, todoContext } from "contexts/todoContext";
import { useContext } from "react";

interface Props {
  description: string;
  active: boolean;
}

const Filter = ({ description, active }: Props) => {
  const { filter, setFilter } = useContext(todoContext) as contextType;

  const updateFilter = (e: any) => {
    console.log(e.target.innerText);
    setFilter(e.target.innerText);
  };
  return (
    <button className={active ? "selected" : undefined} onClick={updateFilter}>
      {description}
    </button>
  );
};

export default Filter;
