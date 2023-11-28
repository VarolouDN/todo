import styles from "./TodoForm.module.css";

function TodoForm({ value, setValue, addTodo }) {
  return (
    <div className={styles.TodoForm}>
      <div className={styles.block1}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles.block2}>
        <button onClick={addTodo}>Create </button>
      </div>
    </div>
  );
}
export default TodoForm;
