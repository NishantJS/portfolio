import { useState } from "react";
import "../styles/theme.scss";

function Theme({ isDarkTheme }: any): JSX.Element {

  const [isDark, setTheme] = useState((): boolean => isDarkTheme);

  const updateTheme = (): void => {

    let root = document.documentElement;

    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light")
      setTheme((): false => false);
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark")
      setTheme((): true => true);
    }
  };


  return (
    <div className="theme_toggle" aria-checked={isDark}>
      <input type="checkbox" id="theme_checkbox" className="theme_checkbox" />
      <label htmlFor="theme_checkbox" className={`toggle ${isDark ? "dark" : ""}`} onClick={updateTheme} title={`Switch to ${isDark ? "light" : "dark"} mode`}>
        <h6 className="theme_title">go {isDark ? "Light" : "Dark"}</h6>
        <span className={`toggle_handler ${isDark ? "theme_change" : ""}`}>
        </span>
      </label>
    </div>
  );
}

export default Theme
