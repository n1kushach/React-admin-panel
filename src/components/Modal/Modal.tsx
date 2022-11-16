import "./Modal.css"

interface ChildPropsType {
  setShowUpdateTask: React.Dispatch<React.SetStateAction<boolean>>;
  setModalText: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  todoList: {
    taskName: string;
    id: number;
    dateAdded: string;
    completed: boolean;
  };
  showUpdateTask: boolean;
  updateTask: (id: number, taskName: string) => void;
  modalText: string;
}

export const Modal = (props: ChildPropsType) => {
  return (
    <div className="modalBackground">
              <div className="deleteBtn">
          <button
            onClick={() => {
              props.setShowUpdateTask(false);
            }}
          >
            X
          </button>
        </div>
      <div className="modalContainer">
        <div className="title">
          <h1>Update your task {props.id}</h1>
        </div>
        <div className="body">
          <input onChange={(event: any) => props.setModalText(event.target.value)} type="text" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setShowUpdateTask(false);
            }}
          >
            Cancel
          </button>
          <button onClick={() => props.updateTask(props.id, props.modalText)}>Continue</button>
        </div>
      </div>
    </div>
  );
};
