import { useState } from "react";
import { ReactComponent as Project } from "../assets/home.svg";

function Theme(props: any): JSX.Element {

  let isDarkTheme = props.isDarkTheme;

  const [isDark, setTheme] = useState((): boolean => isDarkTheme);

  const updateTheme = (): void => {

    let root = document.documentElement;

    if (isDark) {
      root.setAttribute("data-theme", "");
      localStorage.setItem("theme", "light")
      setTheme((): false => false);
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark")
      setTheme((): true => true);
    }
  };


  return (
    <div className="theme_toggle">
      <Project onClick={updateTheme} />
    </div>
  );
}

export default Theme
