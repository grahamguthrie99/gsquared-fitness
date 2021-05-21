import React, { useContext } from 'react';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';
import { SecondaryButton } from "./Buttons"


const SignOut = ({ displayMenu }) => {
    const firebase = useContext(FirebaseContext)

    return (
        <SecondaryButton onClick={() => {
            firebase.signOut()
            localStorage.clear()
            displayMenu(false)
        }}>
            Sign Out
        </SecondaryButton>
    )
}

export default SignOut;