import { createContext } from "react";

const userContext = createContext({
  email: "default@gmail.com",
  setEmail: () => {},
});

export default userContext;
