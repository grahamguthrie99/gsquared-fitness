import PropTypes from "prop-types";
import React from "react";

const WorkoutDisplayList = ({ displayList }) => {
  return (
    <ul>
      {displayList.length > 0 ? (
        displayList.map(function (value, index) {
          const { exercise, reps, weight } = value;
          return (
            <li key={index}>
              {exercise} | {reps} | {weight}
            </li>
          );
        })
      ) : (
        <li>No workouts to display.</li>
      )}
    </ul>
  );
};

WorkoutDisplayList.propTypes = {
  displayList: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default WorkoutDisplayList;
