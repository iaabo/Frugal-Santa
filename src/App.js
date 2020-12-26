import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import WomanHome from "./components/Woman/WomanHome";
import ManHome from "./components/Man/ManHome";
import ChildHome from "./components/Child/ChildHome";
import WomanUnder10 from "./components/Woman/WomanUnder10";
import WomanUnder20 from "./components/Woman/WomanUnder20";
import WomanUnder50 from "./components/Woman/WomanUnder50";
import ManUnder10 from "./components/Man/ManUnder10";
import ManUnder20 from "./components/Man/ManUnder20";
import ManUnder50 from "./components/Man/ManUnder50";
import ChildUnder10 from "./components/Child/ChildUnder10";
import ChildUnder20 from "./components/Child/ChildUnder20";
import ChildUnder50 from "./components/Child/ChildUnder50";

import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/the-frugal-santa" component={Home} />
        <Route path="/woman" component={WomanHome} />
        <Route path="/womangifts10" component={WomanUnder10} />
        <Route path="/womangifts20" component={WomanUnder20} />
        <Route path="/womangifts50" component={WomanUnder50} />
        <Route path="/man" component={ManHome} />
        <Route path="/mangifts10" component={ManUnder10} />
        <Route path="/mangifts20" component={ManUnder20} />
        <Route path="/mangifts50" component={ManUnder50} />
        <Route path="/child" component={ChildHome} />
        <Route path="/childgifts10" component={ChildUnder10} />
        <Route path="/childgifts20" component={ChildUnder20} />
        <Route path="/childgifts50" component={ChildUnder50} />
        <Route path="/about-us" component={AboutUs} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
