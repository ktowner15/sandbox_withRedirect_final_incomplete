import React, { Component } from "react";
import "./styles.css";
import Entry from "./Components/Play/Entry";
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Click from "./Components/Click";
import App from "./App";

class RouteController extends Component {
  render() {
    return (
      <div className="RouteController">
        {/* The always-visible JSX/HTML is declared here, as well as RouterController links. Examples below:*/}
        <Router history={browserHistory}>
          <Switch>
            <Route path="/click" component={Click} />
            <Route path="/dashboard" component={App} />
            <Route path="/" exact component={Entry} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>Check the resource path. Contact help desk</div>;
}

export default RouteController;
