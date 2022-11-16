import "./AddTask.css";
import React, {Dispatch, SetStateAction, ChangeEvent, useState } from "react";

interface ChildPropsType {
    newTask: any;
    setNewTask: React.Dispatch<SetStateAction<string>>;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    todoList: {
        taskName: string;
        id: number;
        dateAdded: Date;
    },
    addTask: any;
}

export const AddTask = (props: ChildPropsType) => {


  return (
    <div className="addtask">
      <p className="add-task-p">Add Task</p>
      <input
        onChange={props.handleChange}
        className="input-task"
        placeholder="Task name..."
      ></input>
      <input onClick={props.addTask} className="submit-task" type="submit"></input>
    </div>
  );
};
