import React, { useEffect } from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import s from "../styles/workoutComponent.style";

export default function WorkoutComponent(props) {
  useEffect(() => {
    console.log("in useEffect!");
  });

  var workoutId = props.match.params.workoutId;

  if (!workoutId) {
    return <PageNotFound />;
  }

  return (
    <div style={s.root}>
      <p>workoutId = {workoutId}</p>
    </div>
  );
}
