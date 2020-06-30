import React, { useEffect, useState, useRef } from "react";
import PageNotFound from "./PageNotFound";
import axios from "axios";
import s from "../styles/workoutComponent.style";
import regeneratorRuntime from "regenerator-runtime";
import VideoPlayer from "./VideoPlayer";
import { Helmet } from "react-helmet";

export default function WorkoutPage(props) {
  const workoutId = props.match.params.workoutId;
  const [workout, setWorkout] = useState();
  const [isFetchingWorkout, setIsFetchingWorkout] = useState(false);

  useEffect(() => {
    const fetchWorkout = async () => {
      var url =
        "https://w3ikkohwal.execute-api.us-east-1.amazonaws.com/prod/workouts/" +
        workoutId;

      const result = await axios(url);
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

  var pageTitle = null;
  var workoutName = null;
  var workoutCreator = null;
  var workoutDisplay = null;
  if (workout) {
    const videoJsOptions = {
      autoplay: true,
      controls: false,
      loop: true,
      sources: [
        {
          src: workout.video,
          type: "video/mp4",
        },
      ],
    };

    workoutName = workout.name;
    pageTitle =
      "Verkout: " + workout.name + " from @" + workout.author.instagramHandle;
    workoutCreator =
      "@" +
      workout.author.instagramHandle +
      " (" +
      workout.author.instagramName +
      ")";
    workoutDisplay = (
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="centered-box">
              <h2>{workoutName}</h2>
              <h5>{workoutCreator}</h5>
              <VideoPlayer {...videoJsOptions} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={s.root}>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={workoutName} />
        <meta name="author" content={workoutCreator} />
      </Helmet>

      {workoutDisplay}
    </div>
  );
}
