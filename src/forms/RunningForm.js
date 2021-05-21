import React, { useState, useContext } from 'react';
import { TextForm } from "../components/TextForm"
import { toast } from 'react-toastify';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';

export const RunningForm = ({ setSelection, uid }) => {
    const firebase = useContext(FirebaseContext)

    const defaultState = [
        {
            name: 'runMin',
            value: '',
            placeholder: 'Run Time (min)',
            type: 'text'

        },
        {
            name: 'runSec',
            value: '',
            placeholder: 'Run Time (sec)',
            type: 'text'

        },
        {
            name: 'runLength',
            value: '',
            placeholder: 'Run Length (miles)',
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



    async function onSubmit(event) {
        const min = values[0].value;
        const sec = values[1].value;
        const distance = values[2].value;
        const timestamp = JSON.stringify(Date.now())
        event.preventDefault();
        if (!formIsValid()) return;

        try {
            await firebase.db.ref('/runs/' + uid).push({
                min,
                sec,
                distance,
                timestamp
            })
            setSelection(0)
            toast("Run Submitted")
        }
        catch (e) {
            console.log(e);
            const errors = {}
            errors.onSave = e.message
            setErrors(errors)
        }
    }

    function formIsValid() {
        const min = values[0].value;
        const sec = values[1].value;
        const distance = values[1].value;
        const errors = {};
        if (!min) errors.time = "Time is required.";
        if (!sec) errors.time = "Time is required.";
        if (!distance) errors.distance = "Distance is required.";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (

        <TextForm
            onChange={onChange}
            onSubmit={onSubmit}
            values={values}
            errors={errors}
            formHeading='Run'
            buttonText='Submit' />

    )
}