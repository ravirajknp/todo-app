import './style.css';

const Todo = ({ todo, updateTodo }) => {

    return (

        <div className="todo-wrapper">
            <div>
                <input onChange={(e)=> updateTodo(e.target.checked)} type="checkbox" checked={todo.isCompleted} />
            </div>
            {todo.todo}
        </div>
    )
}

export default Todo;