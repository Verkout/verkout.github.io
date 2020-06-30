import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import WorkoutPage from "./WorkoutPage";
import PageNotFound from "./PageNotFound";
import s from "../styles/app.style";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/workouts/:workoutId" component={WorkoutPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
