import { createTodo } from "api/api";
import { InputText } from "components/input";
import { contextType, todoContext } from "contexts/todoContext";
import { useContext, useEffect, useState } from "react";

interface Props {
  placeholder: string;
}

const CreateTodo = ({ placeholder }: Props) => {
  const { list, setList } = useContext(todoContext) as contextType;

  const [todo, setTodo] = useState("");

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      createTodo({ description: todo }).then((newTodo) => {
        setList((oldList) => [...oldList, newTodo.data]);
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  return (
    <InputText
      className="new-todo"
      placeholder={placeholder}
      onChange={handleChange}
      handleEnter={handleEnter}
    />
  );
};

export default CreateTodo;
