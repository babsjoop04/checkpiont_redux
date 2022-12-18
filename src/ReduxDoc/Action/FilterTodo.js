import { FILTER_TASK } from "../Constants/Constant";
const FilterTodo = (payload) => {
    return {
        type:FILTER_TASK,
        payload:payload
    }

};

export default FilterTodo;