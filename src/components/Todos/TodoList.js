import Todo from "./Todo";

function TodoList(props){



    return (

        <div>
            {props.todos.length>0 && props.todos.map((todo)=>{

                return <Todo deleteTodo={props.deleteTodo}  key={todo.id} todo={todo}/>
            })}

        </div>
    )

}
export default TodoList