import ListTask from "./ListTask";
import AddTask from "./AddTask";
import { useState } from "react";



const TodoListApp = () => {

    const [seeOrAdd, setSeeOrAdd] = useState(true)
    const [message, setMessage] = useState(" Click here if you want to add new tasks")

    const ChangeLocalState = () => {
        setSeeOrAdd(seeOrAdd => !seeOrAdd)
        message === " Click here if you want to add new tasks" ? setMessage("Click here to show list of tasks! ") : setMessage(" Click here if you want to add new tasks")
    }
    return (
        <div className="container text-center mt-3" id="TodoApp">
            <div className="row">
                <h1 id="titleTodo">Todo List App</h1>
            </div>
            {seeOrAdd ? <ListTask /> : <AddTask />}
            <div className="row d-flex justify-content-center">
                <div className=" text-center">

                    <button
                        id="ButtonAddOrSee"
                        className="btn btn-primary"
                        onClick={ChangeLocalState}
                    >
                        {message}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoListApp;
