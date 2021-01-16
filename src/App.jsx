import { Switch, Route } from "react-router-dom";
import { StyledApp } from "./styles";
import Homepage from "./components/Homepage/Homepage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Works from "./components/Works/Works";
import About from "./components/About/About";
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    language === "english" ? setLanguage("spanish") : setLanguage("english");
  };

  return (
    <StyledApp>
      <Navbar lang={language} handleToggleLanguage={toggleLanguage} />
      <Switch>
        <Route exact path="/" render={() => <Homepage lang={language} />} />
        <Route exact path="/about" render={() => <About lang={language} />} />
        <Route exact path="/works" render={() => <Works lang={language} />} />
      </Switch>
    </StyledApp>
  );
};

export default App;
