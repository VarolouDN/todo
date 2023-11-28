import styles from "./TodoUpdateElement.module.css";
import { useState } from "react";
export default function TodoUpdateElement({
  id,
  value,
  setIsTodoChanging,
  updateTodo,
}) {
  const [todoInput, setTodoInput] = useState(value);

  return (
    <div className={styles.todo}>
      <div className={styles.block1}>
        <div>
          <input
            type="text"
            size="20"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />

          <button
            className={styles.update}
            onClick={() => {
              updateTodo(id, todoInput);
              setIsTodoChanging(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
