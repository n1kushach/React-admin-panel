import "./Sidebar.css";
import React, {Dispatch, SetStateAction, ChangeEvent, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import HelpIcon from '@mui/icons-material/Help';

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
  showHome: boolean;
  setShowHome: React.Dispatch<SetStateAction<boolean>>;
  showDashBoard: boolean;
  setShowDashBoard: React.Dispatch<SetStateAction<boolean>>;
  setShowSearch: React.Dispatch<SetStateAction<boolean>>;
}


export const Sidebar = (props: ChildPropsType) => {

  return (
    <div className="side-bar">
      <div className="top">
        <span className="logo">TASK MANAGER</span>
      </div>
      <hr className="top-hr" />
      <div className="center">
        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <HomeIcon/>
            <button onClick={() => {
              props.setShowDashBoard(false);
              props.setShowHome(!props.showHome);
              props.setShowSearch(false);
              console.log(props.showHome)
            }} className="sidebar-item">Home</button>
          </li>
          <li className="sidebar-li">
            <DashboardIcon />
            <button onClick={() => {
              props.setShowHome(false);
              props.setShowDashBoard(!props.showDashBoard);
              props.setShowSearch(true);
              console.log(props.showDashBoard)
            }} className="sidebar-item">Dashboard</button>
          </li>
          <li className="sidebar-li">
            <PeopleIcon/>
            <button className="sidebar-item">Users</button>
          </li>
          <li className="sidebar-li">
            <WorkIcon/>
            <button className="sidebar-item">Projects</button>
          </li>
          <li className="sidebar-li">
            <HelpIcon/>
            <button className="sidebar-item">Help</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
