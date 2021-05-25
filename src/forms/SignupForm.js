import React, { useState, useContext } from 'react';
import { DefaultForm } from "../components/DefaultForm"
import { AuthContext } from "../session/AuthContext"
import { Loader } from '../components/Loader';


export const SignupForm = ({ props }) => {
    const defualtState = [
        {
            name: 'email',
            value: '',
            placeholder: 'Email Address',
            type: 'email',
            free: true
        },
        {
            name: 'password1',
            value: '',
            placeholder: 'Password',
            type: 'password',
            free: true
        },
        {
            name: 'password2',
            value: '',
            placeholder: 'Re-type Password',
            type: 'password',
            free: true
        }

    ]
    const { authState, actions } = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(defualtState)
    const { loading } = authState

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
        const email = values[0].value;
        const password1 = values[1].value;
        event.preventDefault();
        if (!formIsValid()) return;

        try {
            await actions.signUp(email, password1)

            props.history.push("/activitylog");
        }
        catch (e) {
            console.log(e);
            const errors = {}
            errors.onSave = e.message
            setErrors(errors)
        }
    }

    function formIsValid() {
        const email = values[0].value;
        const password1 = values[1].value;
        const password2 = values[2].value;
        const errors = {};
        if (!email) errors.email = "Email is required.";
        if (!password1) errors.password1 = "Password is required.";
        if (!password2) errors.password2 = "Must retype password.";
        if (password1 !== password2) errors.passwordMatch = "Passwords must match.";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (

        loading ? <Loader /> : <DefaultForm
            onChange={onChange}
            onSubmit={onSubmit}
            values={values}
            errors={errors}
            formHeading='Sign Up'
            buttonText='Sign Up' />

    )
}