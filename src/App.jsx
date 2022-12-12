import { Switch, Route } from "react-router-dom";
import { StyledApp } from "./styles";
import { useState, lazy, Suspense } from "react";

const Homepage = lazy(() => import("./components/Homepage/Homepage.jsx"));
const Navbar = lazy(() => import("./components/Navbar/Navbar.jsx"));
const Works = lazy(() => import("./components/Works/Works.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));

const App = () => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    language === "english" ? setLanguage("spanish") : setLanguage("english");
  };

  return (
    <StyledApp>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar lang={language} handleToggleLanguage={toggleLanguage} />
        <Switch>
          <Route exact path="/" render={() => <Homepage lang={language} />} />
          <Route exact path="/about" render={() => <About lang={language} />} />
          <Route exact path="/works" render={() => <Works lang={language} />} />
        </Switch>
      </Suspense>
    </StyledApp>
  );
};

export default App;
