import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { Loader } from "../components/Loader";
import { WorkoutHistoryForm } from "../forms/WorkoutHistoryForm";
import DisplayList from "../components/DisplayList";

const WorkoutReport = ({ uid }) => {
  const firebase = useContext(FirebaseContext);
  const [workouts, setWorkouts] = useState({});
  const [filterAttributes, setFilterAttributes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (uid)
      firebase.db.ref("/workouts/" + uid).on("value", function (snapshot) {
        setWorkouts(snapshot.val());
        setLoading(false);
      });
  }, [firebase, uid]);

  let displayList = !(workouts === null)
    ? Object.keys(workouts).reduce(
        (obj, key) => obj.concat(workouts[key].workout),
        []
      )
    : {};

  if (
    !(
      Object.keys(filterAttributes).length === 0 &&
      filterAttributes.constructor === Object
    )
  ) {
    const { exercise, reps } = filterAttributes;
    displayList = displayList.filter(
      (workout) => workout.exercise === exercise && workout.reps === reps
    );
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <WorkoutHistoryForm setFilterAttributes={setFilterAttributes} />
      <DisplayList
        filterAttributes={filterAttributes}
        displayList={displayList}
      />
    </>
  );
};

WorkoutReport.propTypes = {
  uid: PropTypes.any.isRequired,
};

export default WorkoutReport;
