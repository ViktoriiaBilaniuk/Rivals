import "./search-bar.scss";
import { FC } from "react";
import { InputText } from "../../ui/input-text/input-text";

interface ISearchBar {
  onSearch: (value: string) => void;
}

export const SearchBar: FC<ISearchBar> = (props) => {
  const { onSearch } = props;
  
  return (
    <div className="search-bar">
      <InputText
        name={"search-bar"}
        placeholder="Search"
        onValueChange={(value) => onSearch(value)}
      ></InputText>
    </div>
  );
};
