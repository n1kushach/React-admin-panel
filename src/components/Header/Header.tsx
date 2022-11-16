import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Search } from "./Search";

interface Props {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  todoList: any;
  setTodoList: React.Dispatch<React.SetStateAction<any>>
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export const Header = (props: Props) => {

  // const onChange = (event: any) => {
  //   props.todoList.length === 0 ? alert("No tasks to search!") : filterSearch(event.target.value);
    
  // }

  // const filterSearch = (taskName: any) => {
  //   const filtered = props.todoList.filter((todo: any) => todo.taskName.includes(taskName));
  //   props.setTodoList([...props.todoList, filtered]);
  // }


  return (
    <div className="header">
      <div className="wrapper">
        <div className="search">
            {/* <input type="text" placeholder="Search..."></input>
            <SearchIcon/> */}
            {props.showSearch ? <Search todoList={props.todoList}/> : null}
        </div>
      </div>
    </div>
  );
};
