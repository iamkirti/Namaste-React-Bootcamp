import { useEffect, useState, useContext } from "react";
import Searchbar from "./SearchBar";
import CardContainer from "./CardContainer";
import userData from "../assets/UserData.json";
import userContext from "./UserContext";
import themecontext from "./ThemeContext";
const BodyComponent = () => {
  const [filteredEmp, setFilteredEmp] = useState([]);
  const [allEmp, setallEmp] = useState([]);
  const [stateName, setStateName] = useState("");

  // const email = useContext(userContext);

  const { email, setEmail } = useContext(userContext);
  const { theme, setTheme } = useContext(themecontext);
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
  // const fn = (x) => {
  //   console.log("x", x);
  //   setState(x);
  // };
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
      <h4>Body component context{email}</h4>
      <h4>Body component theme{theme}</h4>
      <button onClick={() => setEmail("bodycompo@namastereact.com")}>
        Update from Body component
      </button>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Update theme
      </button>
      <Searchbar
        allEmp={allEmp}
        setFilteredEmp={setFilteredEmp}
        setStateName1={setStateName}
      />
      {/* <Searchbar allEmp={allEmp} setFilteredEmp={setFilteredEmp} /> */}
      <div className="card-container">
        <CardContainer
          filteredEmp={filteredEmp.length > 0 ? filteredEmp : allEmp}
          stateName={stateName}
        />
      </div>
    </>
  );
};

export default BodyComponent;
