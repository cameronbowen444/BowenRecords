import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  placeholder?: string;
  onSearchComplete?: () => void;
};

function SearchBar({
  placeholder = "Search by title, artist, genre, or format...",
  onSearchComplete,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedSearch = searchTerm.trim();

    if (!trimmedSearch) return;

    navigate(`/records?search=${encodeURIComponent(trimmedSearch)}`);
    setSearchTerm("");

    if (onSearchComplete) {
      onSearchComplete();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full bg-white/5 border border-white/10 px-5 py-3 text-white outline-none focus:border-white/40"
      />

      <button
        type="submit"
        className="shrink-0 rounded-full bg-white text-black px-5 py-3 font-semibold hover:bg-white/80 transition"
      >
        <FiSearch size={18} />
      </button>
    </form>
  );
}

export default SearchBar;