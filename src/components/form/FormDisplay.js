import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { primaryTheme, headingFont, typeScale } from "../../utils";
import { PrimaryButton } from "../Buttons";
import { ErrorList } from "./ErrorList";

const FormHeader = styled.h3`
  font-family: ${headingFont};
  font-size: ${typeScale.header3};
  font-weight: 100;
  color: ${primaryTheme.primaryColor};
`;

const FormWrapper = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 2%;
  border: 1px solid ${primaryTheme.textColor};
  box-shadow: 5px 5px 0 0 ${primaryTheme.textColorInverted},
    inset 5px 5px 0 0 ${primaryTheme.textColorInverted};
`;

export const FormDisplay = ({
  onSubmit,
  formHeading,
  formComponents,
  buttonText,
  errors,
}) => {
  return (
    <>
      <FormWrapper onSubmit={onSubmit}>
        <FormHeader>{formHeading}</FormHeader>
        {formComponents.map((component) => component)}
        <PrimaryButton type="submit">{buttonText}</PrimaryButton>
        <ErrorList errors={errors} />
      </FormWrapper>
    </>
  );
};

FormDisplay.propTypes = {
  buttonText: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
  formComponents: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  formHeading: PropTypes.any.isRequired,
  onSubmit: PropTypes.any.isRequired,
};
