import axios from "axios";
import {
  TodoCreateDTO,
  TodoDeleteDTO,
  TodoReadDTO,
  TodoUpdateDTO,
} from "components/models/Todo";

export const createTodo = (body: TodoCreateDTO) => {
  return axios.post<TodoReadDTO>("http://localhost:9000/api/tasks", body);
};

export const ListTodo = () => {
  return axios.get<TodoReadDTO[]>("http://localhost:9000/api/tasks");
};

export const updateTodo = (id: string, body: TodoUpdateDTO) => {
  return axios.patch<TodoReadDTO>(
    "http://localhost:9000/api/tasks/" + id,
    body
  );
};

export const deleteTodoApi = (id: TodoDeleteDTO) => {
  return axios.delete<TodoReadDTO>("http://localhost:9000/api/tasks/" + id);
};
