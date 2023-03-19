import { useEffect, useState } from "react";
import Searchbar from "./SearchBar";
import CardContainer from "./CardContainer";
import userData from "../assets/UserData.json";
const BodyComponent = () => {
  const [filteredEmp, setFilteredEmp] = useState([]);
  const [allEmp, setallEmp] = useState([]);
  // useEffect(() => {
  //   console.log("inside useeffect");
  //   fetchTeam();
  // }, []);
  // fetchTeam function can also be used
  // async function fetchTeam() {
  //   const teamArray = [];
  //   const len = userData.length;
  //   userData.forEach(async (userData, index) => {
  //     const team = await fetch(
  //       `https://api.github.com/users/${userData.username}`
  //     );
  //     const JsonTeam = await team.json();
  //     teamArray.push(JsonTeam);
  //     if (index + 1 === len) {
  //       setFilteredEmp([...teamArray]);
  //     }
  //   });
  // }

  const fetchData = () => {
    return userData.map(async (userData) => {
      const res = await fetch(
        `https://api.github.com/users/${userData.username}`
      );
      return res.json();
    });
  };

  useEffect(() => {
    const promises = fetchData();
    Promise.all(promises).then((data) => {
      console.log(data, "data");
      setallEmp([...data]);
    });
  }, []);
  return (
    <>
      <Searchbar allEmp={allEmp} setFilteredEmp={setFilteredEmp} />
      <div className="card-container">
        <CardContainer
          filteredEmp={filteredEmp.length > 0 ? filteredEmp : allEmp}
        />
      </div>
    </>
  );
};

export default BodyComponent;
