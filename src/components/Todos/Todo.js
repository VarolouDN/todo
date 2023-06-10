
import styles from "./Todo.module.css"
function Todo(props){


    return (
     <div id={props.todo.id} className={styles.todo}>

         <div className={styles.div}>{props.todo.value}</div>
         <button onClick={props.deleteTodo}  className={styles.button}>Done</button>
     </div>
    )
}
export default  Todo