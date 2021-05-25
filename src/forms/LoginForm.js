import React, { useState, useContext } from 'react';
import { DefaultForm } from "../components/DefaultForm"
import { AuthContext } from "../session/AuthContext"
import { Loader } from "../components/Loader"


export const LoginForm = ({ props }) => {

    const defualtState = [
        {
            name: 'email',
            value: '',
            placeholder: 'Email Address',
            type: 'email',
            free: true
        },
        {
            name: 'password',
            value: '',
            placeholder: 'Password',
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
        const password = values[1].value;
        event.preventDefault();

        if (!formIsValid()) return;

        try {
            await actions.login(email, password)

            props.history.push("/dashboard");
        }
        catch (e) {
            const errors = {}
            errors.onSave = e.message
            setErrors(errors)
        }

    }

    function formIsValid() {
        const email = values[0].value;
        const password = values[1].value;
        const errors = {};
        if (!email) errors.email = "Email is required.";
        if (!password) errors.password = "Password is required.";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (

        loading ? <Loader /> : <DefaultForm
            onChange={onChange}
            onSubmit={onSubmit}
            values={values}
            errors={errors}
            formHeading='Login'
            buttonText='Login' />

    )
}