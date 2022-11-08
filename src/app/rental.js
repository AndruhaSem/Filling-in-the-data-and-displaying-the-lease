import React from "react";
import AddRental from "./component/addRental";
import Statistics from "./componentsStatistics/statistics";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./navBar/navBar";

function Rental() {
    return(
        <div>
            <NavBar/>
            <Switch>
                <Route path="/rental" component={AddRental} />
                <Route path="/statistics" component={Statistics} />
                <Redirect to="/rental" />
            </Switch>
        </div>
    )
}
export default Rental