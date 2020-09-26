import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Footer from "./Footer";

const App = () => {
  return (<>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/" component={Services} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Contact} />
      <Redirect to="/" />
    </Switch>
    <Contact />
    <Footer />
  </>);

}
export default App;