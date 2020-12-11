import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { completeHandler, deleteTask } from "../redux/actions/tasks";

import Task from "./Task";

function TaskList() {
  const { tasks, activeFolderName } = useSelector((state) => state.folders);

  const dispatch = useDispatch();

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const onComleteTask = (id) => {
    dispatch(completeHandler(id))
  }

  return (
    <div className="task__list">
      {tasks.map((task) =>
        task.folder === activeFolderName ? (
          <Task {...task} key={task.id} onDeleteTask={onDeleteTask} onComleteTask={onComleteTask}/>
        ) : activeFolderName === "" ? (
          <Task {...task} key={task.id} onDeleteTask={onDeleteTask}  onComleteTask={onComleteTask}/>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default TaskList;
