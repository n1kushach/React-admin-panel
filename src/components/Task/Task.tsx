import { SetStateAction } from "react";
import "./Task.css";

interface ChildPropsType {
    taskName: string;
    dateAdded: Date;
    id: number;
    completed: boolean;
}


export const Task = (props: ChildPropsType) => {
  return (
        <div className="taskboard">
            <h1 className="taskname">{props.taskName}</h1>
            <p className="dateadded">Date added - {props.dateAdded.toString().slice(0,21)}</p>
            <button className="deletetask">Delete</button>
            <button className="completedtask">Completed</button>
        </div>
    );
};
