import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeFolder, selectFolder} from '../redux/actions/folders'
import Folder from "./Folder";

function FolderList() {
  const {folders} = useSelector((state) => state.folders);
  const dispatch = useDispatch();

  const onDeleteFolder = (name) =>{
      dispatch(removeFolder(name));
      dispatch(selectFolder(''))

  }
  
  const onSelectFolder = (name) =>{
    dispatch(selectFolder(name))
  }

  return (
    <div className="folder__list">
      {folders &&
        folders.map((folder) => (
          <Folder key={folder.id} onSelectFolder={onSelectFolder} deleteFolder={onDeleteFolder} {...folder}/>
        ))}
    </div>
  );
}

export default FolderList;
