import { Component } from "react";

// const ProfileComponent2 = () => {
//   useEffect(() => {
//     return () => {
//       //clean up
//     };
//   }, []);
//   return <h3>Kirti Sahai</h3>;
// };

class ProfileComponent extends Component {
  constructor(props) {
    console.log("Profile Constructor");
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    console.log("Profile componentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log("data", data);
    // console.log("test1");
    console.log("json in Profile componentDidMount", json);
    // console.log("test2");
    this.setState({ userInfo: json });
  }
  componentWillMount() {
    //  console.log("Profile componentWillMount");
  }

  componentDidUpdate() {
    console.log("Profile componentDidUpdate");
  }
  render() {
    console.log("Profile render");
    return (
      <>
        <h3>Profile:{this.props.name}</h3>
        <h3>email:{this.state.userInfo.login}</h3>
      </>
    );
  }
}

export default ProfileComponent;
