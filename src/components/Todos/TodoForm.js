import styles from "./TodoForm.module.css"




function TodoForm(props){


    return (
        <div className={styles.TodoForm}>
           <div className={styles.block1}>
            <input  type="text" value={props.value} onChange={props.onChangeInput}/>
           </div>
           <div className={styles.block2}>
            <button onClick={props.onClickButton}>Click me</button>
           </div>

        </div>
    )
}
export default TodoForm