import PropTypes from "prop-types";
import React, { useState } from "react";
import { LoginForm } from "../forms/LoginForm";
import { SignupForm } from "../forms/SignupForm";
import { ViewSelector } from "../components/ViewSelector";
import landing from "../assets/images/landing.svg";

const Landing = (props) => {
  const [selection, setSelection] = useState(-1);
  const viewOptions = ["Log In", "Sign Up"];
  const { history } = props;
  const views = [
    <LoginForm key={0} history={history} />,
    <SignupForm key={1} history={history} />,
  ];
  return (
    <ViewSelector
      selection={selection}
      setSelection={setSelection}
      viewOptions={viewOptions}
      views={views}
      image={landing}
    />
  );
};

Landing.propTypes = {
  history: PropTypes.any.isRequired,
};

export default Landing;
