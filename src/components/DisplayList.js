import PropTypes from "prop-types";
import React from "react";

const DisplayList = ({ displayList }) => {
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

DisplayList.propTypes = {
  displayList: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default DisplayList;
