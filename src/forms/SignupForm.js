import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { FormFactory } from "../components/form/FormFactory";
import { signupDefaultState } from "./DefaultStates";
import { AuthContext } from "../session/AuthContext";
import { Loader } from "../components/Loader";

export const SignupForm = ({ history }) => {
  const { authState, actions } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(signupDefaultState);
  const { loading } = authState;

  async function onSubmit(event) {
    const email = values[0].value;
    const password = values[1].value;
    event.preventDefault();
    if (!formIsValid()) return;

    try {
      await actions.signUp(email, password);
      history.push("/activitylog");
    } catch (e) {
      console.log(e);
      const errors = {};
      errors.onSave = e.message;
      setErrors(errors);
    }
  }

  function formIsValid() {
    const email = values[0].value;
    const password = values[1].value;
    const passwordRetype = values[2].value;
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    if (!passwordRetype) errors.passwordRetype = "Must retype password.";
    if (password !== passwordRetype)
      errors.passwordMatch = "Passwords must match.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return loading ? (
    <Loader />
  ) : (
    <FormFactory
      onSubmit={onSubmit}
      values={values}
      setValues={setValues}
      errors={errors}
      formHeading="Sign Up"
      buttonText="Sign Up"
    />
  );
};

SignupForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
