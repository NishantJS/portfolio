import '../assets/main.scss';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Project from './Project';
import NotFound from './NotFound';
import "../assets/container.scss";
import Theme from './Theme';
import { useEffect } from 'react';

const App = (): JSX.Element => {

  console.info("Made with <3 by Nishant Chorge in React.JS")

  useEffect((): void => {

    !localStorage.getItem("theme") && localStorage.setItem("theme", "dark");

    localStorage.getItem("theme") === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "");;

  }, [])

  const isDark = localStorage.getItem("theme") === "dark" ? true : false;

  return (<>
    <div className="main">
      <Router>
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="container">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Theme isDarkTheme={isDark} />
        </div>
      </Router>
    </div>
  </>
  );
}

export default App;
