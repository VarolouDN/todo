import styles from "./Todo.module.css";

import { useState } from "react";
import TodoUpdateElement from "./TodoUpdateElement";
function Todo({ deleteTodo, value, id, updateTodo }) {
  const [isTodoChanging, setIsTodoChanging] = useState(false);

  if (isTodoChanging)
    return (
      <TodoUpdateElement
        id={id}
        value={value}
        setIsTodoChanging={setIsTodoChanging}
        updateTodo={updateTodo}
      />
    );
  return (
    <div className={styles.todo}>
      <div className={styles.div}>{value}</div>

      <button className={styles.update} onClick={() => setIsTodoChanging(true)}>
        Update
      </button>
      <button onClick={() => deleteTodo(id)} className={styles.delete}>
        X
      </button>
    </div>
  );
}
export default Todo;
