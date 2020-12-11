import React from "react";
import {useSelector} from 'react-redux'


function AddTasks( {activeForm,onSelectForm, onAdd} ) {
    const activeFolder = useSelector(state => state.folders.activeFolderName)
    const [taskValue, setTaskValue] = React.useState("");
    const valueHandler = (e) =>{
        setTaskValue(e.target.value)
    }
    
    const onAddTask = (e) =>{
        const newTask = {
            folder:activeFolder,
            text:taskValue,
            id:Date.now().toString(),
        }
        e.preventDefault();
        onAdd(newTask);
        setTaskValue('');
        onSelectForm()
    }


    
    

  return (
    <div className={`${activeForm ? 'add__task--active':''} add__task`}>
      <form onSubmit={onAddTask} className="add__task-form" action="/">
        <input
          onChange={valueHandler}
          type="text"
          placeholder="Название папки"
          className="add__task-input"
          value={taskValue}
        ></input>
        <button
          
          className="btn add__task-button"
          type="submit"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddTasks;
