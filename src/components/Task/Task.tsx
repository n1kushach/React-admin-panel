import { SetStateAction } from "react";
import "./Task.css";

interface ChildPropsType {
  taskName: string;
  dateAdded: Date;
  id: number;
  completed: boolean;
  deleteTask: (id: number) => void;
  taskCompleteToggle: (id: number) => void;
}

export const Task = (props: ChildPropsType) => {
  return (
    <div
      style={{ backgroundColor: props.completed ? "green" : "white" }}
      className="taskboard"
    >
      <h1 className="taskname">{props.taskName}</h1>
      <p className="dateadded">
        Date added - {props.dateAdded.toString().slice(0, 21)}
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
    </div>
  );
};
