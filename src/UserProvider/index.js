import React, { createContext, useState } from 'react';
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    // You can define functions here to update the user state if needed
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };