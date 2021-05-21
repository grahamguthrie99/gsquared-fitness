import React, { useState } from 'react';
import { LoginForm } from "../forms/LoginForm"
import { SignupForm } from "../forms/SignupForm"
import { FormSelector } from "../components/FormSelector"
import landing from "../assets/images/landing.svg"


const Landing = (props) => {
    const [selection, setSelection] = useState(0);
    const formOptions = ['Log In', 'Sign Up']
    const forms = [
        <LoginForm props={props} />,
        <SignupForm props={props} />,
    ]

    return (
        <FormSelector
            selection={selection}
            setSelection={setSelection}
            formOptions={formOptions}
            forms={forms}
            image={landing}
        />

    );
}

export default Landing;