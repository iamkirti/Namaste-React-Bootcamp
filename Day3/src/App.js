import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";

const heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Going from"),
  React.createElement("h2", {}, "0 to hero"),
  React.createElement("h3", {}, "in 3 months"),
]);

const heading1 = (
  <div className="title">
    <h1>Going from</h1>
    <h2>0 to hero</h2>
    <h3>in 3 months jsx. {console.log("We can do this too")}</h3>
  </div>
);

const ChangeComponent = () => <h2>0 to hero in change component</h2>;
const HeadingComponent = () => {
  return (
    <div className="title">
      <Header />
      <h1>Going from</h1>
      <ChangeComponent />
      <h3>
        in 3 months jsx. in HeadingComponent{console.log("We can do this too")}
      </h3>
    </div>
  );
};

console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
//root.render(heading1);
