import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Shimmer from "./components/shimmerdetail";
import { ThemeContext } from "./contexts/ThemeContext";
const App = () => {
  const [isDark,setDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <ThemeContext.Provider value={[isDark,setDark]}>
      <Header/> 
      <Outlet/> 
    </ThemeContext.Provider>
  );
};
export default App;
 