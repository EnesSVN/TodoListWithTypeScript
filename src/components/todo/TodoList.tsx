import { deleteTodoApi, ListTodo, updateTodo } from "api/api";
import { TodoReadDTO } from "components/models/Todo";
import { contextType, todoContext } from "contexts/todoContext";
import { useContext, useEffect, useState } from "react";

const TodoList = () => {
  const { list, setList } = useContext(todoContext) as contextType;

  const UpdateCompleted = (id: any) => {
    const index = list.find((todo) => todo.id === id) as TodoReadDTO;
    index.done = !index.done;
    updateTodo(id, index).then((e) => {
      ListTodo().then((e) => {
        setList(e.data);
      });
    });
  };

  const deleteTodo = (id: any) => {
    deleteTodoApi(id).then((res) => {
      const newList = list.filter((todo) => todo.id !== id);
      ListTodo().then((e) => {
        setList(e.data);
      });
    });
  };

  useEffect(() => {
    ListTodo().then((e) => {
      setList(e.data);
    });
  }, []);

  return (
    <ul className="todo-list">
      {list.map((todo) => (
        <li key={todo.id} className={todo.done ? "completed" : undefined}>
          <div className="view">
            <input
              onClick={() => UpdateCompleted(todo.id)}
              className="toggle"
              type="checkbox"
              defaultChecked={todo.done}
            />
            <label>{todo.description} </label>
            <button
              type="button"
              className="destroy"
              onClick={() => deleteTodo(todo.id)}
            ></button>
          </div>
          <input className="edit" defaultValue="Taste Javascript" />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
