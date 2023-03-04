import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import CardComponent from "./component/CardComponent";

import { TITLE, IMAGE, ENDPOINT } from "./utils/constants";
import Searchbar from "./component/SearchBar";
import NoResultsComponent from "./component/NoResultsComponent";
import Avenger from "./component/Avenger";
import ErrorComponent from "./component/ErrorComponent";
import AboutUs from "./component/AboutUs";
import userData from "./assets/UserData.json";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
} from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <h2 className="header-container-left">{TITLE}</h2>
      <img src={IMAGE} alt="banner" />
    </div>
  );
};

// const CardContainer = ({ filteredEmp }) => {
//   if (filteredEmp.length > 0) {
//   filteredEmp.map((empDetail) => {
//     return <CardComponent details={empDetail} key={empDetail.id} />;
//   });
//   } else {
//     return <NoResultsComponent />;
//   }
// };

const CardContainer = ({ filteredEmp }) =>
  //console.log("filteredEmp", filteredEmp);
  !filteredEmp.length ? (
    <NoResultsComponent />
  ) : (
    filteredEmp.map((empDetail) => (
      <Link to={`/avenger/${empDetail.login}`}>
        <CardComponent details={empDetail} key={empDetail.id} />;
      </Link>
    ))
  );

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

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/avenger/:login",
        element: <Avenger />,
      },
      {
        path: "/search",
        element: <BodyComponent />,
      },
    ],
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
