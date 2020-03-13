import React from "react";
import useDarkMode from "./Hooks/useDarkMode"

const Nav = () => {

const [darkMode, setDarkMode] = useDarkMode(false);
const toggling = e => {
  e.preventDefault();
  setDarkMode(!darkMode);
};

return (
    <div>
    <h1>Women Soccer Data</h1>
    <button onClick= {toggling} className = "button" > Set Dark or Light Mode</button>
    </div>
)

}
export default Nav

