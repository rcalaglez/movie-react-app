import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false);
  const [guestSession, setGuestSession] = useState(null);

  return (
    <UserContext.Provider
      value={{
        isUser,
        guestSession,
        login: (session) => {
          setGuestSession(session);
          setIsUser(true);
        },
        logout: () => {
          setGuestSession(null);
          setIsUser(false);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
