import "./search-bar.scss";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Input } from "../../ui/input/input";
import { Dropdown } from "../../ui/dropdown/dropdown";
import { DropdownSearchItem } from "./ui/dropdown-search-item";
import { fetchTournaments } from "../../api/tournaments/tournaments";
import { useDebounce } from "../../../hooks/useDebounce";

export const SearchBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { debouncedValue: debouncedSearhValue, loadingDebounce } =
    useDebounce(searchValue);
  const [results, setResults] = useState<any[]>([]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const loadResults = async () => {
      if (debouncedSearhValue.length < 3) {
        return;
      }
      setResults([]);
      setLoading(true);

      const searchResults = await fetchTournaments(debouncedSearhValue);
      setResults(searchResults);
      setLoading(false);
    };
    loadResults();
  }, [debouncedSearhValue]);

  const renderContent = () => {
    if (searchValue.length < 3) {
      return <div className="search__info">Enter at least 3 characters</div>;
    }

    if (loading || loadingDebounce) {
      return <div className="search__info">Loading...</div>;
    }

    if (!results.length) {
      return <div>No results found</div>;
    }

    return (
      <>
        {results?.map((item) => (
          <DropdownSearchItem key={item.id} title={item.title} />
        ))}
      </>
    );
  };

  return (
    <div className="search">
      <Dropdown
        className="search__dropdown"
        isOpen={isOpen}
        labelElement={
          <Input
            placeholder="Search"
            value={searchValue}
            onChange={onChangeSearch}
            onBlur={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
          />
        }
        content={renderContent()}
      />
    </div>
  );
};
