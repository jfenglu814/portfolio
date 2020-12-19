import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
