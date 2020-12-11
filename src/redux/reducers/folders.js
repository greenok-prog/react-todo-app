import {
    ADD_FOLDER, ADD_TASK, COMPLETE_TASK_HANDLER,
    DELETE_FOLDER, DELETE_TASK, SELECT_FOLDER
} from "../actions/types";
import { initialState } from "./state";


export const folders = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_FOLDER:
            const newState = state.folders.filter(val => val.name !== action.name)
            const newTasks = state.tasks.filter(task => task.folder !== action.name)
            return {
                ...state,
                folders: newState,
                tasks: newTasks,
            }

        case ADD_FOLDER:
            const newFolder = state.folders.concat(action.payload);

            return {
                ...state,
                folders: newFolder
            }

        case SELECT_FOLDER:
            return { ...state, activeFolderName: action.name }

        case ADD_TASK:
            const newTask = state.tasks.concat(action.payload)
            return {
                ...state,
                tasks: newTask,
            }
        case DELETE_TASK:
            const newTaskList = state.tasks.filter(task => task.id !== action.id)
            return {
                ...state,
                tasks: newTaskList,

            }
        case COMPLETE_TASK_HANDLER:{
            return{
                ...state,
                tasks:state.tasks.map(task => {
                    if(task.id !== action.id){
                        return task
                    }
                    return{
                        ...task,
                        completed: !task.completed
                    }
                })
            }
        }

           





        default:
            return state
    }
}



