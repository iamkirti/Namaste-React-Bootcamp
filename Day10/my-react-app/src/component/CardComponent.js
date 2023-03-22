import { useContext } from "react";
import themecontext from "./ThemeContext";
const CardComponent = ({ details, state }) => {
  console.log("details", details);
  const { avatar_url, name, location, company, following } = details;
  const { theme, setTheme } = useContext(themecontext);
  return (
    <div
      id="card"
      className="card"
      style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
    >
      <div className="card-dp">
        <img src={avatar_url} alt="Employee Image"></img>
      </div>
      <div>Theme is:{theme}</div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      ></button>
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <h4>{location}</h4>
          <p className="card-company">{company}</p>
          <p>{following}</p>
        </div>
      </div>
      <p>State:{state}</p>
    </div>
  );
};

export default CardComponent;
