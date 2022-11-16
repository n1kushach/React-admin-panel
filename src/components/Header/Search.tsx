import SearchIcon from "@mui/icons-material/Search";

interface Props {
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todoList: object;
}

export const Search = (props: Props) => {
  return (
    <div className="search">
      <input type="text" placeholder="Search..."></input>
      <SearchIcon />
    </div>
  );
};
