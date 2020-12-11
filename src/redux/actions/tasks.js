import { ADD_TASK, COMPLETE_TASK_HANDLER, DELETE_TASK } from './types';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})
export const completeHandler = (id) => ({
    type:COMPLETE_TASK_HANDLER,
    id
    
});

export const deleteTask = (id) => ({
    type:DELETE_TASK,
    id
    
})


