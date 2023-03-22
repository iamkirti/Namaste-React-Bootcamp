import { Outlet } from "react-router-dom";
import React from "react";
import userContext from "./UserContext";

// const AboutUs = () => {
//   return (
//     <>
//       <h1>About Us</h1>
//       <Outlet />
//       <h2>Our Kool Food Ordering App</h2>
//     </>
//   );
// };

class AboutUs extends React.Component {
  constructor(props) {
    console.log("AboutUs Constructor");
    super(props);
  }
  componentDidMount() {
    console.log("AboutUs componentDidMount");
  }
  componentWillMount() {
    // console.log("AboutUs componentWillMount");
  }
  render() {
    console.log("AboutUs render");
    return (
      <>
        <h1>About Us</h1>
        <userContext.Consumer>
          {({ email, setEmail }) => {
            return (
              <>
                <span>Email:{email}</span>
                <button
                  onClick={() => {
                    setEmail("aboutus@email.com");
                  }}
                >
                  update email
                </button>
              </>
            );
          }}
        </userContext.Consumer>
        <Outlet></Outlet>
      </>
    );
  }
}

export default AboutUs;
