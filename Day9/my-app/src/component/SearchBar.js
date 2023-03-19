import { useState } from "react";
import stateObj from "../utils/state-city.json";
import { searchEmployees } from "../utils";
import useCities from "./useCities";

const Searchbar = ({ setFilteredEmp, allEmp }) => {
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("Goa");
  const [cityName, setCityName] = useState("");
  const cityList = useCities(stateName);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSelectState = (e) => {
    setStateName(e.target.value);
  };
  const handleSelectCity = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //If no input is provided then display all the data
    if ((e.target.value = "")) {
      setFilteredEmp(allEmp);
      return;
    }
    const filteredEmployees = searchEmployees(searchText, allEmp);
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
      <select value={stateName} onChange={handleSelectState}>
        {Object.keys(stateObj).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select value={cityName} onChange={handleSelectCity}>
        {cityList?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {/* Alternative way
      <select value={cityName} onChange={handleSelectCity}>
        {stateObj[stateName]?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select> */}
    </form>
  );
};

export default Searchbar;
