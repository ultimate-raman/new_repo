import React from "react";
import {Route, Switch} from "react-router-dom";
import About from "./About";
import StartSelling from "./StartSelling";
import Error from "./Error";
import Menu from "./Menu";
import MainSignup from "./SignupForm/MainSignup";
import Login from "./LoginForm/Login";
import MainPhotoshops from "./MainPhotoshops";
import Dropdown from "./Dropdown";

const App = () => {
    return (
        <>
            <Menu />
            <br/><br/>
            <Dropdown/ >
            <div className="hello">
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/startselling" component={StartSelling} />
                <Route exact path="/signup" component={MainSignup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/mainphotoshops" component={MainPhotoshops} />
                <Route component={Error}/>
            </Switch>
            </div>
        </>
    );
};

export default App;
