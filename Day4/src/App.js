import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent";
import team from "./UserDetails.json";

const title = "Avengers";
const HeaderComponent = () => {
  return (
    <div className="header-container">
      <h2 className="top-left">{title}</h2>
      <img
        src="https://cdn.wallpapersafari.com/36/94/SK2sZv.jpg"
        alt="banner"
      />
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

const CardContainer = () => {
  return team.map((empdetail) => {
    return <CardComponent details={empdetail} key={empdetail.id} />;
  });
};

const BodyComponent = () => (
  <div className="card-container">
    <CardContainer />
    {/* <CardComponent details={data[0]} />
    <CardComponent details={data[0]} />
    <CardComponent details={data[0]} />
    <CardComponent details={data[0]} /> */}
  </div>
);

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
