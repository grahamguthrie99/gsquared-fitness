import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";

const AuthenticatedRoute = ({ component: RouteComponent, ...rest }) => {
  const { authState } = useContext(AuthContext);
  const userLocal = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!authState.user || !!userLocal ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default AuthenticatedRoute;
