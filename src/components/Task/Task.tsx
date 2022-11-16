import { SetStateAction } from "react";
import { Modal } from "../Modal/Modal";
import "./Task.css";

interface ChildPropsType {
  taskName: string;
  dateAdded: string;
  id: number;
  completed: boolean;
  deleteTask: (id: number) => void;
  taskCompleteToggle: (id: number) => void;
  showUpdateTask: boolean;
  setShowUpdateTask: React.Dispatch<SetStateAction<boolean>>;
  setModalText: React.Dispatch<SetStateAction<string>>;
}

export const Task = (props: ChildPropsType) => {
  return (
    <div
      style={{
        backgroundColor: props.completed ? "green" : "white",
        display: props.showUpdateTask ? "none" : "flex",
      }}
      className="taskboard"
    >
      <h1 className="taskname">{props.taskName}</h1>
      <p className="dateadded">
        Date added - {props.dateAdded.slice(0, 21)}
      </p>
      <button onClick={() => props.deleteTask(props.id)} className="deletetask">
        Delete
      </button>
      <button
        onClick={() => props.taskCompleteToggle(props.id)}
        className="completedtask"
      >
        Completed
      </button>
      <button onClick={() => {props.setShowUpdateTask(true)}} className="update-task">Update</button>
    </div>
  );
};
