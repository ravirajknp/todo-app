import Todo from '../Todo'
const Todos = ({ todos, updateTodo }) => {
console.log(todos,'todooss');
    return (
        <div>
            {todos.map((todo, index) => {
                return <Todo todo={todo} key={index} updateTodo={(value)=>updateTodo(value,index)}/>

            })}
        </div>
    )
}

export default Todos;
