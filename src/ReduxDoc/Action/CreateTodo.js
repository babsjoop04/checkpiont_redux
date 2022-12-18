import { ADD_TASK } from "../Constants/Constant";

const CreateTodo = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
};

export default CreateTodo;