import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import axios from "axios";
import s from "../styles/workoutComponent.style";
import regeneratorRuntime from "regenerator-runtime";

export default function WorkoutComponent(props) {
  const workoutId = props.match.params.workoutId;
  const [workout, setWorkout] = useState();
  const [isFetchingWorkout, setIsFetchingWorkout] = useState(false);

  useEffect(() => {
    console.log("in useEffect!");

    const fetchWorkout = async () => {
      var url =
        "https://w3ikkohwal.execute-api.us-east-1.amazonaws.com/prod/workouts/" +
        workoutId;

      const result = await axios(url);
      console.log("got result:");
      console.log(result);
      if (result && result.data) {
        setWorkout(result.data.data);
      }
    };

    if (workoutId && !workout && !isFetchingWorkout) {
      setIsFetchingWorkout(true);
      fetchWorkout();
    }
  }, []);

  if (!workoutId) {
    return <PageNotFound />;
  }

  return (
    <div style={s.root}>
      <p>workoutId = {workoutId}</p>
      <p>{workout && workout.name}</p>
    </div>
  );
}
