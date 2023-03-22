import { createContext } from "react";

const themecontext = createContext({
  theme: "default",
  setTheme: () => {},
});

export default themecontext;
