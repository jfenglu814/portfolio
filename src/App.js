import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { Switch, Route, useLocation } from "react-router-dom";
import WorkDetail from "./pages/WorkDetail";
//animation
import { AnimatePresence } from "framer-motion";

import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch Location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/portfolio" exact>
            <AboutMe />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/work/:id">
            <WorkDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
