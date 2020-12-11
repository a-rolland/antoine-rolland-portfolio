import { Switch, Route } from "react-router-dom";
import { StyledApp } from './styles';
import Homepage from "./components/Homepage/Homepage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Works from "./components/Works/Works";
import About from "./components/About/About";

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/works" render={() => <Works />} />
      </Switch>
    </StyledApp>
  );
}

export default App;
