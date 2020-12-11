import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddFolder } from ".";
import { addFolder } from "../redux/actions/folders";


function SidebarHeader({ title }) {
  const dispatch = useDispatch();
  const [aciveFolderForm, setAciveFolderForm] = useState(false);
  const onAddFolder = (folder) =>{
    dispatch(addFolder(folder))
  }

  

  const handleActiveFolder = () => {
    setAciveFolderForm(!aciveFolderForm);
  };
  const onSubmit = () => {
    setAciveFolderForm(false);
  };

  return (
    <header className="header">
      <div className="header__title">{title}</div>
      <button onClick={handleActiveFolder} className="add__btn add-item__btn">
        <span></span>
      </button>
      
        <AddFolder onAddFolder={onAddFolder}
         onSubmitForm={onSubmit}
        handleActiveFolder={handleActiveFolder}
        isActiveForm={aciveFolderForm} />
      
    </header>
  );
}

export default SidebarHeader;
