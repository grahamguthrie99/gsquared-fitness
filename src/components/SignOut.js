import React, { useContext } from "react";
import { FirebaseContext } from "../config/Firebase/FirebaseContext";
import { SecondaryButton } from "./Buttons";

const SignOut = () => {
  const firebase = useContext(FirebaseContext);
  return (
    <SecondaryButton
      onClick={() => {
        firebase.signOut();
        localStorage.clear();
      }}
    >
      Sign Out
    </SecondaryButton>
  );
};
export default SignOut;
