import React, { useState } from 'react';
import { TextForm } from "../components/TextForm"

export const ExerciseForm = ({ exerciseList, addExercise }) => {

    const defaultState = [
        {
            name: 'exercise',
            value: '',
            placeholder: 'Exercise Name',
            type: 'text'

        },
        {
            name: 'sets',
            value: '',
            placeholder: 'Number of Sets',
            type: 'text'
        },
        {
            name: 'weight',
            value: '',
            placeholder: 'Weight Used (lbs)',
            type: 'text'
        },
        {
            name: 'reps',
            value: '',
            placeholder: 'Reps Completed',
            type: 'text'
        }
    ]

    const [values, setValues] = useState(defaultState)
    const [errors, setErrors] = useState({})

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

    function onSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        const entry = {}
        entry.exercise = values[0].value;
        entry.sets = values[1].value;
        entry.weight = values[2].value;
        entry.reps = values[3].value;
        const newList = exerciseList.concat(entry)
        addExercise(newList);
        setValues(defaultState)
    }

    function formIsValid() {
        const exercise = values[0].value;
        const sets = values[1].value;
        const weight = values[2].value;
        const reps = values[3].value;
        const errors = {};
        if (!weight) errors.weight = "Weight is required.";
        if (!exercise) errors.exercise = "Exercise is required.";
        if (!sets) errors.sets = "Set number is required.";
        if (!reps) errors.reps = "Rep number is required.";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (
        <TextForm
            onChange={onChange}
            onSubmit={onSubmit}
            values={values}
            errors={errors}
            formHeading='Add Exercise'
            buttonText='Add' />
    )
}