import React from "react";
import Navigation from "./Elements/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import FoodOrdering from "./Pages/FoodOrdering";


function App() {

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book-table" component={Booking} />
          <Route exact path="/food-order" component={FoodOrdering} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/* <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book-table" component={Booking} />
          <Route exact path="/food-order" component={FoodOrdering} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>*/
