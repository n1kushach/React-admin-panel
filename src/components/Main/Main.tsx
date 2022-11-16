import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";
import { Task } from "../Task/Task";
import { AddTask } from "../AddTask/AddTask";
import { ChangeEvent, Dispatch, useState } from "react";
import { Modal } from "../Modal/Modal";
import "./Main.css";

export const Main = () => {
  const [todoList, setTodoList] = useState<any>([]);
  const [newTask, setNewTask] = useState("");
  const [showHome, setShowHome] = useState<boolean>(false);
  const [showDashBoard, setShowDashBoard] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [showUpdateTask, setShowUpdateTask] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      taskName: newTask,
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      dateAdded: new Date().toString(),
      completed: false,
    };
    newTask.length === 0
      ? alert("Please input taskname, otherwise it won't be added!")
      : setTodoList([...todoList, task]);
    alert("Task added!");
    setId(task.id)
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

  const updateTask = (id: number, taskName: string) => {
    setTodoList(
      todoList.map((task: any) => {
        if (task.id === id) {
          return { ...task, taskName: taskName };
        } else {
          return task;
        }
      })
    )
    console.log(id, taskName)
    setShowUpdateTask(false);
  }

  return (
    <div className="main">
      <Sidebar
        setShowUpdateTask={setShowUpdateTask}
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
        showSearch={showSearch}
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
                    setModalText={setModalText}
                    showUpdateTask={showUpdateTask}
                    setShowUpdateTask={setShowUpdateTask}
                    taskCompleteToggle={taskCompleteToggle}
                    deleteTask={deleteTask}
                    completed={todo.completed}
                    id={todo.id}
                    taskName={todo.taskName}
                    dateAdded={todo.dateAdded}
                  />
                );
              })}
          {showUpdateTask && (
            <Modal
              modalText={modalText}
              updateTask={updateTask}
              todoList={todoList}
              showUpdateTask={showUpdateTask}
              id={id}
              setModalText={setModalText}
              setShowUpdateTask={setShowUpdateTask}
            />
          )}
        </div>
      </div>
    </div>
  );
};
