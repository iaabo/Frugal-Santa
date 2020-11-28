import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import GiftsUnder10 from "./components/GiftsUnder10/GiftsUnder10";
import GiftsUnder20 from "./components/GiftsUnder20/GiftsUnder20";
import GiftsUnder50 from "./components/GiftsUnder50/GiftsUnder50";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={LandingPage} />
        <Route path="/the-frugal-santa" component={Home} />
        <Route path="/gifts10" component={GiftsUnder10} />
        <Route path="/gifts20" component={GiftsUnder20} />
        <Route path="/gifts50" component={GiftsUnder50} />
        <Route path="/about-us" component={AboutUs} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
