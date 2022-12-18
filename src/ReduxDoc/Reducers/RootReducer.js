import { ADD_TASK, FILTER_TASK, SEE_ALL, inline, none, EDIT_TASK } from "../Constants/Constant";
import DefaultTasks from "../../Component/DefaultTasks";

const initialState = {
    tasks: [...DefaultTasks],
    storageAll: [...DefaultTasks],
    displayButtonSeeAll: none

}

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                storageAll: [...state.storageAll, action.payload],
                tasks: [...state.tasks, action.payload],
                displayButtonSeeAll: inline
            }

        case FILTER_TASK:
            return {
                storageAll: [...state.storageAll],
                tasks: [...state.storageAll].filter((tasks) => tasks.asDone === action.payload.filterMode),
                displayButtonSeeAll: inline
            }

        case SEE_ALL:

            return {
                tasks: [...state.storageAll],
                storageAll: [...state.storageAll],
                displayButtonSeeAll: none
            }
        case EDIT_TASK:
            const newStorageAll = [...state.storageAll].filter((element) => element.id !== action.payload.id)
            return {
                storageAll: [...newStorageAll, action.payload],
                tasks: [...newStorageAll, action.payload],
                displayButtonSeeAll: none
            }



        default:
            return state
    }

};

export default RootReducer;