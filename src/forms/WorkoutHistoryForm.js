import PropTypes from "prop-types";
import React, { useState } from "react";
import { FormFactory } from "../components/form/FormFactory";
import { workoutHistoryDefaultState } from "./DefaultStates";

export const WorkoutHistoryForm = ({ setFilterAttributes }) => {
  const [values, setValues] = useState(workoutHistoryDefaultState);

  async function onSubmit(event) {
    event.preventDefault();
    const exercise = values[0].value;
    const reps = values[1].value;
    if (exercise === "Select" || reps === "Select") setFilterAttributes({});
    else setFilterAttributes({ exercise, reps });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormFactory
        onSubmit={onSubmit}
        values={values}
        setValues={setValues}
        formHeading="Filter Maxes"
        buttonText="Filter"
      />
    </div>
  );
};

WorkoutHistoryForm.propTypes = {
  setFilterAttributes: PropTypes.func.isRequired,
};
