import React from "react";
import AddTasks from "./AddTasks";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/actions/tasks";

function ContentHeader() {
  const activeFolder = useSelector((state) => state.folders.activeFolderName);
  const [form, setForm] = React.useState(false);
  const onSelectForm = () => {
    setForm(!form);
  };
  const dispatch = useDispatch();
  const onAddTasks = (task) => {
    dispatch(addTask(task));
  };
  return (
    <header className="header">
      
      <div className="folder__title">
        {activeFolder ? activeFolder : "Все задачи"}
      </div>
      <div onClick={onSelectForm} className="select__form-btn">
        <span></span>
      </div>
      <AddTasks
        onAdd={onAddTasks}
        onSelectForm={onSelectForm}
        activeForm={form}
      />
    </header>
  );
}

export default ContentHeader;
