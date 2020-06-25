import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import WorkoutComponent from "./WorkoutComponent";
import PageNotFound from "./PageNotFound";
import s from "../styles/app.style";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/workouts/:workoutId" component={WorkoutComponent} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
