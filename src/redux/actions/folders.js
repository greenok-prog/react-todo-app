import { ADD_FOLDER, DELETE_FOLDER, SELECT_FOLDER } from "./types";

export const addFolder = (folder) => ({
    type:ADD_FOLDER,
    payload: folder
})
export const removeFolder = (name) => ({
    type:DELETE_FOLDER,
    name
})
export const selectFolder = (name) => ({
    type:SELECT_FOLDER,
    name,
})