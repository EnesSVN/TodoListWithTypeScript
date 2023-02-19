import { createTodo } from "api/api";
import { TodoReadDTO } from "components/models/Todo";
import { createContext, PropsWithChildren, useState } from "react";

export type contextType = {
  list: TodoReadDTO[];
  filter: String;
  setFilter: React.Dispatch<React.SetStateAction<String>>;
  setList: React.Dispatch<React.SetStateAction<TodoReadDTO[]>>;
};

export const todoContext = createContext<contextType | null>(null);

export const TodoContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [list, setList] = useState<TodoReadDTO[]>([]);
  const [filter, setFilter] = useState<String>("All");

  // const [todo, setTodo] = useState("");

  // const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key == "Enter") {
  //     createTodo({ description: todo }).then((newTodo) => {
  //       setList((oldList) => [...oldList, newTodo.data]);
  //     });
  //   }
  // };

  const filterdTodos = list.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !todo.done;
    } else if (filter === "Completed") {
      return todo.done;
    }
    // switch (filter) {
    //   case "All":
    //     return true;
    //   case "Active":
    //     return !todo.done;
    //   default:
    //     return todo.done;
    // }
  });

  return (
    <todoContext.Provider
      value={{ list: filterdTodos, setList, filter, setFilter }}
    >
      {children}
    </todoContext.Provider>
  );
};
