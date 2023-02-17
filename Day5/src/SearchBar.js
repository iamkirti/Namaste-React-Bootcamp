import { useState } from "react";

import data from "./UserDetails.json";
import { searchEmployees } from "./utils";

const Searchbar = ({ setFilteredEmp }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //If no input is provided then display all the data
    if ((e.target.value = "")) {
      setFilteredEmp(data);
      return;
    }
    const filteredEmployees = searchEmployees(searchText, data);
    setFilteredEmp(filteredEmployees);
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar-iconcontainer">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        id="search"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default Searchbar;
