import React, { useState } from "react";

function AddTask({ isActiveForm, onAddFolder, handleActiveFolder }) {
  const [Foldervalue, setFolderValue] = useState("");

  const handleChangeFolderValue = (e) => {
    setFolderValue(e.target.value);
  };
  const handleAddFolder = (e) => {
    const newFolder = {
      name: Foldervalue,
      id: Date.now().toString(),
      tasks: [],
    };
    e.preventDefault();
    onAddFolder(newFolder);
    setFolderValue("");
    handleActiveFolder();
  };

  return (
    <div className={`add__folder ${isActiveForm ? "add__folder--active" : ""}`}>
      <form className="add__folder-form form" action="/">
        <input
          value={Foldervalue}
          onChange={handleChangeFolderValue}
          type="text"
          placeholder="Название папки"
          className="add__folder-input"
        ></input>
        <button
          onClick={handleAddFolder}
          className="btn add__folder-button"
          type="submit"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddTask;
