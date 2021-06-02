import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { primaryTheme } from "../../utils";

const InputWrapper = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${primaryTheme.textColor};
  outline: 0;
  font-size: 1.3rem;
  color: ${primaryTheme.textColor};
  padding: 1%;
  margin-bottom: 15px;
  background: none;
  transition: border-color 0.2s;
  &::placeholder {
    color: ${primaryTheme.textColor};
  }
`;

const SelectWrapper = styled.select``;

export const FormComponent = ({ componentType, input, onChange }) => {
  return (
    <>
      {
        {
          input: <FormInput input={input} onChange={onChange} />,
          select: <FormSelect input={input} onChange={onChange} />,
        }[componentType]
      }
    </>
  );
};

FormComponent.propTypes = {
  componentType: PropTypes.any.isRequired,
  input: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
};

const FormInput = ({ onChange, input }) => {
  return (
    <InputWrapper
      name={input.name}
      value={input.value}
      onChange={onChange}
      type={input.type}
      placeholder={input.placeholder}
    />
  );
};

FormInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.any,
    placeholder: PropTypes.any,
    type: PropTypes.any,
    value: PropTypes.any,
  }).isRequired,
  onChange: PropTypes.any.isRequired,
};

const FormSelect = ({ onChange, input }) => {
  return (
    <SelectWrapper name={input.name} onChange={onChange} value={input.value}>
      {input.options.map((input, index) => (
        <option value={input} key={index}>
          {input}
        </option>
      ))}
    </SelectWrapper>
  );
};

FormSelect.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.any,
    options: PropTypes.shape({
      map: PropTypes.func,
    }),
    value: PropTypes.any,
  }).isRequired,
  onChange: PropTypes.any.isRequired,
};
