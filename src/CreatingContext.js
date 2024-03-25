import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Fahad khan",
    gmail: "dummy@gmail.com",
  },
});
export default UserContext;
