import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default AppLayout;
