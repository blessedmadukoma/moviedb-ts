import { SearchBarProps } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3xl"
    >
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
        value={query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-r ml-4 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
