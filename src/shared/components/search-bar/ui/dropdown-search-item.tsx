import { FC } from "react";
import "./dropdown-search-item.scss";

interface IDropdownSearchItem {
  title: string;
}

export const DropdownSearchItem: FC<IDropdownSearchItem> = (props) => {
  const { title } = props;

  return (
    <div className="dropdown-search-item">
      <p className="dropdown-search-item__title">{title}</p>
    </div>
  );
};
