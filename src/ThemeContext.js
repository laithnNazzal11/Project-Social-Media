import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext('');

export const ThemeContextProvider = ({ children }) => {

  const [selectedTheme, setSelectedTheme] = useState("light");
  const darkMode = {
    main : "#1d2226",
    secendary : "#ffff",
    third : "#282f34",
    four : "#1d2226",
    five :"#1d2226",
    seven:"#1d2226",
    eigth:"#fff"


   
  }

  const lightMode = {
    main : "White",
    secendary : "#494949",
    four:"#f5f5f5",
    five:"#1877f2",
    eigth:"#1877f2"
  }
  const [Theme, setTheme] = useState(darkMode);
  useEffect(()=>{
if(selectedTheme=="dark"){
    setTheme(darkMode);
  }

  else {
    setTheme(lightMode);

  }
  },[selectedTheme])
  
  return (
    <ThemeContext.Provider value={{Theme:Theme,selectedTheme:selectedTheme,setSelectedTheme:setSelectedTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;