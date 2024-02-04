import { createContext, useContext, useState } from "react";

const initialUserContext = {
  name: undefined,
  updateName: () => undefined,
};

export const UserContext = createContext(initialUserContext);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  return <UserContext.Provider>{children}</UserContext.Provider>;
};
