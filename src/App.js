import "./App.css";
import { getTodos } from "./components/services/api.js";
import Todo from "./components/todos/Todo.js";
import TodoForm from "./components/todos/TodoForm.js";
import TodoList from "./components/todos/TodoList.js";
import { useEffect, useState } from "react";
import nextId from "react-id-generator";
import Loader from "./components/ui/Loader.js";

import Pagination from "./components/todos/Pagination.js";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(6);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  console.log(currentTodos);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const todos = await getTodos();
      console.log(todos);
      setTodos((state) => todos);
      setIsLoading(false);
    })();
  }, []);

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((elem) => elem.id !== id));
  }

  function addTodo() {
    if (!value) return;
    setTodos([{ value: value, id: nextId() }, ...todos]);
    setValue("");
  }

  function updateTodo(id, inputValue) {
    setTodos((todos) =>
      todos.map((todo) =>
        id === todo.id ? { ...todo, value: inputValue } : todo
      )
    );
  }
  console.log(todos);

  return (
    <div className="App">
      <TodoForm value={value} setValue={setValue} addTodo={addTodo} />

      <TodoList>
        {isLoading ? (
          <Loader />
        ) : (
          currentTodos?.map((todo) => {
            return (
              <Todo
                deleteTodo={deleteTodo}
                key={todo.id}
                {...todo}
                updateTodo={updateTodo}
              />
            );
          })
        )}
      </TodoList>
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
