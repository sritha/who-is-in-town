import { ChangeEvent } from "react";
import { SearchBox, Input } from "../components/styles";
interface SearchProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ handleChange }: SearchProps) => {
  return (
    <SearchBox>
      <Input
        type="search"
        placeholder="Search Artists"
        onChange={(e) => handleChange(e)}
      />
    </SearchBox>
  );
};

export default Search;
