import React, { useState, useContext } from 'react';
import { FormFactory } from "../components/form/FormFactory"
import { loginDefaultState } from "./DefaultStates"
import { AuthContext } from "../session/AuthContext"
import { Loader } from "../components/Loader"


export const LoginForm = ({ props }) => {

    const { authState, actions } = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(loginDefaultState)
    const { loading } = authState

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
        loading ? <Loader /> : <FormFactory
            onSubmit={onSubmit}
            values={values}
            setValues={setValues}
            errors={errors}
            formHeading='Login'
            buttonText='Login'
        />

    )
}