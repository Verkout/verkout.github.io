import React from "react";
import Interactive from "react-interactive";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import ExampleComponent from "./ExampleComponent";
import PageNotFound from "./PageNotFound";
import s from "../styles/app.style";

export default function App() {
  return (
    <div style={s.root}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
