import React, { useState } from 'react';
import { LoginForm } from "../forms/LoginForm"
import { SignupForm } from "../forms/SignupForm"
import { ViewSelector } from "../components/ViewSelector"
import landing from "../assets/images/landing.svg"


const Landing = (props) => {
    const [selection, setSelection] = useState(0);
    const viewOptions = ['Log In', 'Sign Up']
    const views = [
        <LoginForm props={props} />,
        <SignupForm props={props} />,
    ]
    return (
        <ViewSelector
            selection={selection}
            setSelection={setSelection}
            viewOptions={viewOptions}
            views={views}
            image={landing}
        />
    );
}

export default Landing;