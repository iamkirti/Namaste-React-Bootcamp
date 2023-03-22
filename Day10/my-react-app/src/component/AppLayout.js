import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import userContext from "./UserContext";
import themecontext from "./ThemeContext";
const AppLayout = () => {
  const [emailid, setEmailid] = useState("kirti.sahai02@mail.com");
  const [theme, setTheme] = useState("light");
  return (
    <themecontext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <userContext.Provider value={{ email: emailid, setEmail: setEmailid }}>
        <HeaderComponent />
        <Outlet />
      </userContext.Provider>
    </themecontext.Provider>
  );
};

export default AppLayout;
