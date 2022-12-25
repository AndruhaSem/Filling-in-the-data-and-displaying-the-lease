import React from "react";
import AddRental from "./component/addRental";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./navBar/navBar";
import InformationList from "./componentsStatistics/InformationList";

function Rental() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/rental" component={AddRental} />
        <Route path="/statistic/:bookkeeping?" component={InformationList} />
        <Redirect to="/rental" />
      </Switch>
    </div>
  );
}
export default Rental;
