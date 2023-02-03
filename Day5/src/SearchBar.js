import { useState } from "react";

import data from "./UserDetails.json";

const searchEmployees = (searchText) => {
  return data.filter((emp) =>
    emp.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const Searchbar = ({ setFilteredEmp }) => {
  //const searchText="kirti";
  const [searchText, setSearchText] = useState("");

  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        if ((e.target.value = "")) {
          setFilteredEmp(data);
          return;
        }
        const filteredEmployees = searchEmployees(searchText);
        console.log(filteredEmployees);
        setFilteredEmp(filteredEmployees);
      }}
    >
      <div className="search-bar-iconcontainer">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        id="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default Searchbar;
