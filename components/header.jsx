import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const Header = () => {
  const [isDark,setDark] = useContext(ThemeContext) 
  return (
    <>
      <header className={`head ${isDark ? 'dark':' '}`}>
        <div className="header-content">
          <h2>Where in the country? </h2>
          <p
            onClick={() => {
              setDark(!isDark)
              localStorage.setItem('isDarkMode',!isDark)
            }}
          >
            <i className={`${isDark ?'fa-solid fa-sun' : 'fa-solid fa-moon'}`}></i>&nbsp;&nbsp;{isDark?'Light':'Dark' }Mode
          </p>
        </div>
      </header>
    </>
  );
};
export default Header;
