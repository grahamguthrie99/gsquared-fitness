import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorContainer = styled.ul`
  list-style-type: none;
  display: block;
  padding-left: 0;
`;

export const ErrorList = ({ errors }) => {
  return (
    <ErrorContainer>
      {errors &&
        Object.keys(errors).map((keyName, i) => (
          <li key={i}>{errors[keyName]}</li>
        ))}
    </ErrorContainer>
  );
};

ErrorList.propTypes = {
  errors: PropTypes.object,
};
