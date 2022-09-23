import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isUser,
        login: () => {
          setIsUser(false);
        },
        logout: () => {
          setIsUser(true);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
