import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import CardComponent from "./CardComponent";
import team from "./UserDetails.json";
import { title } from "./constants";
import { image } from "./constants";
import Searchbar from "./SearchBar";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <h2 className="header-container-left">{title}</h2>
      <img src={image} alt="banner" />
    </div>
  );
};
// const data = [
//   {
//     img: "https://avatars.githubusercontent.com/iamkirti",
//     name: "Kirti Sahai",
//     city: "Bangalore",
//     company: "Kongsberg Digital",
//     position: "Development Engineer",
//     id: "1rfrfr",
//   },
// ];

const CardContainer = ({ filteredEmp }) => {
  return filteredEmp.map((empdetail) => {
    return <CardComponent details={empdetail} key={empdetail.id} />;
  });
};

const BodyComponent = () => {
  const [filteredEmp, setFilteredEmp] = useState(team);
  return (
    <>
      <Searchbar setFilteredEmp={setFilteredEmp} />
      <div className="card-container">
        <CardContainer filteredEmp={filteredEmp} />
        {/* <CardComponent details={data[0]} />
      <CardComponent details={data[0]} />
      <CardComponent details={data[0]} />
      <CardComponent details={data[0]} /> */}
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
