import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";
import { Task } from "../Task/Task";
import { AddTask } from "../AddTask/AddTask";
import { ChangeEvent, Dispatch, useState } from "react";
import "./Main.css";

export const Main = () => {
  const [todoList, setTodoList] = useState<any>([]);
  const [newTask, setNewTask] = useState("");
  const [showHome, setShowHome] = useState<boolean>(false);
  const [showDashBoard, setShowDashBoard] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      taskName: newTask,
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      dateAdded: new Date(),
      completed: false,
    };
    newTask.length === 0
      ? alert("Please input taskname, otherwise it won't be added!")
      : setTodoList([...todoList, task]);
    alert("Task added!");
  };

  const deleteTask = (id: number) => {
    setTodoList(todoList.filter((task: any) => task.id !== id));
  };

  const taskCompleteToggle = (id: number) => {
    setTodoList(
      todoList.map((task: any) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="main">
      <Sidebar
        setShowSearch={setShowSearch}
        showDashBoard={showDashBoard}
        setShowDashBoard={setShowDashBoard}
        showHome={showHome}
        setShowHome={setShowHome}
        todoList={todoList}
        addTask={addTask}
        newTask={newTask}
        handleChange={handleChange}
        setNewTask={setNewTask}
      />
      <div className="main-container">
        <Header
          searchText={searchText}
          setSearchText={setSearchText}
          setTodoList={setTodoList}
          todoList={todoList}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />
        <div className="tasks"></div>
        <div className="add">
          {showHome === false ? (
            ""
          ) : (
            <AddTask
              todoList={todoList}
              addTask={addTask}
              newTask={newTask}
              handleChange={handleChange}
              setNewTask={setNewTask}
            />
          )}
        </div>
        <div className="tasklist">
          {showDashBoard === false
            ? ""
            : todoList.map((todo: any) => {
                return (
                  <Task
                    taskCompleteToggle={taskCompleteToggle}
                    deleteTask={deleteTask}
                    completed={todo.completed}
                    id={todo.id}
                    taskName={todo.taskName}
                    dateAdded={todo.dateAdded}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};
