import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="https://www.seoclerk.com/pics/000/834/682/e29993eec8a393585b726e72239cf524.jpg"
          alt="logo"
        ></img>
      </div>
      <div className="searchbar">
        <input type="text" name="searchInput" placeholder="Search Bar" />
        <button>Search</button>
      </div>
      <div className="userprofile">
        <img
          src="https://img.icons8.com/cotton/512/gender-neutral-user.png"
          alt="user icon"
        ></img>
      </div>
    </header>
  );
};
export default HeaderComponent;
