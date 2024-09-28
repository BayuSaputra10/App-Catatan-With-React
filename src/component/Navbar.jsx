/* eslint-disable react/prop-types */
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="navbar flex justify-between p-4 border-b-2 shadow-sm bg-gray-300">
      <h1 className="font-bold text-2xl">Notes</h1>
      <input
        type="search"
        name="search"
        id="search"
        className="border border-neutral-400 rounded px-2"
        placeholder="Cari catatan...."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Navbar;
