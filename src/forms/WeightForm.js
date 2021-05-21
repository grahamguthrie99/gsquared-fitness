import React, { useState, useContext } from 'react';
import { TextForm } from "../components/TextForm"
import { toast } from 'react-toastify';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';

export const WeightForm = ({ setSelection, uid }) => {

    const defualtState = [
        {
            name: 'weight',
            value: '',
            placeholder: 'Weight (lbs.)',
            type: 'text'
        }
    ]

    const [values, setValues] = useState(defualtState)
    const [errors, setErrors] = useState({})
    const firebase = useContext(FirebaseContext);

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
        const weight = values[0].value;
        const timestamp = JSON.stringify(Date.now())
        event.preventDefault();
        if (!formIsValid()) return;

        try {
            await firebase.db.ref('/weights/' + uid).push({
                weight,
                timestamp
            })
            setSelection(0)
            toast("Weight Submitted")
        }
        catch (e) {
            console.log(e);
            const errors = {}
            errors.onSave = e.message
            setErrors(errors)
        }
    }

    function formIsValid() {
        const weight = values[0].value;
        const errors = {};
        if (!weight) errors.weight = "Weight is required.";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (

        <TextForm
            onChange={onChange}
            onSubmit={onSubmit}
            values={values}
            errors={errors}
            formHeading='Weight'
            buttonText='Submit' />

    )
}