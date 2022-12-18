import { EDIT_TASK } from "../Constants/Constant";

const CreateEditTodo = (payload) => {
    return {
        type: EDIT_TASK,
        payload: payload

    }
};

export default CreateEditTodo;
