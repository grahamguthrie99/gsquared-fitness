import React, { useState, useContext } from 'react';
import { DefaultForm } from "../components/DefaultForm"
import { toast } from 'react-toastify';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';

export const WorkoutForm = ({ setSelection, uid }) => {
    const firebase = useContext(FirebaseContext)
    const defaultState = [
        {
            name: 'exercise',
            value: 'Select',
            label: 'Select Exercise',
            options: ['Squat', 'Bench', 'Overhead Press', 'Bent Over Row', 'Deadlift'],
            free: false,

        },
        {
            name: 'weight',
            value: '',
            placeholder: 'Weight Used (lbs)',
            type: 'number',
            free: true
        },
        {
            name: 'reps',
            value: 'Select',
            label: 'Select Reps',
            options: [1, 3, 5, 10],
            free: false
        }
    ]


    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(defaultState)

    function onChange(event) {
        const { value } = event.target;
        const changeIndex = values.findIndex(({ name }) => name === event.target.name)
        const changedObject = { ...values[changeIndex], value: value }
        setValues(preValues => (
            [...preValues.slice(0, changeIndex),
                changedObject,
            ...preValues.slice(changeIndex + 1)
            ]
        ));

    }

    async function onSubmit(event) {

        event.preventDefault();
        if (!formIsValid()) return;

        const workout = {}
        workout.exercise = values[0].value;
        workout.weight = values[1].value;
        workout.reps = values[2].value;
        const timestamp = JSON.stringify(Date.now())
        try {
            setValues(defaultState)
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
        if (!reps) errors.reps = "Rep number is required.";
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
            <DefaultForm
                onChange={onChange}
                onSubmit={onSubmit}
                values={values}
                errors={errors}
                formHeading='Add Workout'
                buttonText='Submit Workout'
            />
        </div>
    )
}



