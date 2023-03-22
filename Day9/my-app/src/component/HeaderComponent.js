import { TITLE, IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <div className="header-container">
      <h2 className="header-container-left">{TITLE}</h2>
      <img src={IMAGE} alt="banner" />
      <Link to="/">
        <h1>{TITLE}</h1>
      </Link>
      <Link to="/search">
        <span>Search</span>
      </Link>
      <Link to="/about-us">
        <span>AboutUs</span>
      </Link>
    </div>
  );
};

export default HeaderComponent;
