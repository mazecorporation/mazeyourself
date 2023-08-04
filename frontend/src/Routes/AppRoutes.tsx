import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import ClubDetail from "../views/ClubDetail";
import Explore from "../views/Explore";
import Home from "../views/Home";
import Contact from '../views/Contact';
import About from "../views/About";
import { useEffect } from "react";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/club-detail/:id">
          <ClubDetail />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
