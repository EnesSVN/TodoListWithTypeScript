import { TodoContextProvider } from "contexts/todoContext";
import { Filters } from "./filter";
import { Content, Footer, Header } from "./layout";
import { CreateTodo, TodoList } from "./todo";

function App() {
  return (
    <div className="todoapp">
      <TodoContextProvider>
        <Header>
          <h1>ToDo</h1>
        </Header>
        <Content>
          <CreateTodo placeholder="What needs to be done ?" />
          <TodoList />
        </Content>
        <Footer>
          <Filters />
        </Footer>
      </TodoContextProvider>
    </div>
  );
}

export default App;
