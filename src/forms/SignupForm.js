import React, { useState, useContext } from 'react';
import { FormFactory } from "../components/form/FormFactory"
import { signupDefaultState } from "./DefaultStates"
import { AuthContext } from "../session/AuthContext"
import { Loader } from '../components/Loader';


export const SignupForm = ({ props }) => {

    const { authState, actions } = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(signupDefaultState)
    const { loading } = authState

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

        loading ? <Loader /> : <FormFactory
            onSubmit={onSubmit}
            values={values}
            setValues={setValues}
            errors={errors}
            formHeading='Sign Up'
            buttonText='Sign Up'
        />

    )
}