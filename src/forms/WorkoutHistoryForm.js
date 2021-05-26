import React, { useState } from 'react';
import { FormFactory } from "../components/form/FormFactory"
import { workoutHistoryDefaultState } from "./DefaultStates"


export const WorkoutHistoryForm = ({ setFilterAttributes }) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(workoutHistoryDefaultState)

    async function onSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;

        const workout = {}
        workout.exercise = values[0].value;
        workout.reps = values[1].value;
        setFilterAttributes(workout)
    }

    function formIsValid() {
        const exercise = values[0].value;
        const reps = values[1].value;
        const errors = {};
        if (exercise === 'Select') errors.exercise = "Please select an exercise.";
        if (reps === 'Select') errors.reps = "Please select an amount of reps.";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <FormFactory
                onSubmit={onSubmit}
                values={values}
                setValues={setValues}
                errors={errors}
                formHeading='Filter Maxes'
                buttonText='Filter'
            />
        </div>
    )
}
