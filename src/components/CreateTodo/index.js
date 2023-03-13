import { useRef } from "react";

const CreateTodo = ({ addTodo }) => {
    const inputRef = useRef("");

    const submitHandler = () => {
        const inputVal = inputRef.current.value;
        const todoObj = { todo: inputVal, isCompleted: false }
        console.log(inputVal, 'innn');
        addTodo(todoObj)
        inputRef.current.value="";

    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={submitHandler}>+</button>
        </div>
    )
}

export default CreateTodo;