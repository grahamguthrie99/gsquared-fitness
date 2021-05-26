import React, { useState, useContext } from 'react';
import { FormFactory } from "../components/form/FormFactory"
import { workoutDefaultState } from "./DefaultStates"
import { toast } from 'react-toastify';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';

export const WorkoutForm = ({ setSelection, uid }) => {
    const firebase = useContext(FirebaseContext)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(workoutDefaultState)

    async function onSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;

        const workout = {}
        workout.exercise = values[0].value;
        workout.weight = values[1].value;
        workout.reps = values[2].value;
        const timestamp = JSON.stringify(Date.now())
        try {
            setValues(workoutDefaultState)
            await firebase.db.ref('/maxes/' + uid).push({
                workout,
                timestamp
            })
            setSelection(0)
            toast("Workout Submitted")
        }
        catch (e) {
            console.log(e);
            const errors = {}
            errors.onSave = e.message
            setErrors(errors)
        }
    }

    function formIsValid() {
        const exercise = values[0].value;
        const weight = values[1].value;
        const reps = values[2].value;
        const errors = {};
        if (!weight) errors.weight = "Weight is required.";
        if (!exercise) errors.exercise = "Exercise is required.";
        if (exercise === 'Select') errors.exercise = "Please select an exercise.";
        if (!reps) errors.reps = "Rep number is required.";
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
                formHeading='Add Workout'
                buttonText='Submit Workout'
            />
        </div>
    )
}



