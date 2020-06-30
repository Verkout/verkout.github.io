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
  var workoutImage = null;
  var workoutCreator = null;
  var workoutDisplay = null;
  var creatorImage = null;
  var workoutUrl = null;
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
    workoutUrl = "https://verkout.com/workouts/" + workout.id;
    pageTitle = workout.author.instagramHandle + "'s " + workout.name;
    workoutCreator =
      "@" +
      workout.author.instagramHandle +
      " (" +
      workout.author.instagramName +
      ")";
    workoutImage = workout.thumbnail;
    creatorImage = workout.author.profileImageUrl;
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
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={creatorImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={workoutUrl} />
      </Helmet>

      {workoutDisplay}
    </div>
  );
}
