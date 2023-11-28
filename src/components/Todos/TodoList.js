import { Children } from "react";

function TodoList(/*todos, deleteTodo, updateTodo*/ { children }) {
  return (
    <div className="">
      {
        /*todos.map((todo) => {
        return <Todo deleteTodo={deleteTodo} key={todo.id} {...todo} />;
      })*/ children
      }
    </div>
  );
}
export default TodoList;
