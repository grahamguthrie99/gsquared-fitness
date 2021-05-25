import React from 'react';
import styled from 'styled-components';
import { primaryTheme, headingFont, typeScale } from "../utils"
import { PrimaryButton } from "./Buttons"
import { ErrorList } from "./ErrorList"

const FormHeader = styled.h3`
    font-family: ${headingFont};
    font-size: ${typeScale.header3};
    font-weight: 100;
    color: ${primaryTheme.primaryColor};
`

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
    box-shadow: 
    5px 5px 0 0 ${primaryTheme.textColorInverted}, 
    inset 5px 5px 0 0 ${primaryTheme.textColorInverted};
`

const FormInput = styled.input`
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
`



export const DefaultForm = ({ onChange, onSubmit, values, formHeading, buttonText, errors }) => {
    return (
        <>

            <FormWrapper onSubmit={onSubmit}>
                <FormHeader>{formHeading}</FormHeader>
                {
                    values.map((input, index) =>
                        input.free ? <FormInput
                            key={index}
                            name={input.name}
                            value={input.value}
                            onChange={onChange}
                            type={input.type}
                            placeholder={input.placeholder}
                        /> :
                            <select
                                name={input.name}
                                onChange={onChange}
                                value={input.value}
                                key={index}
                            >
                                {input.options.map((input, index) =>
                                    <option
                                        value={input}
                                        key={index}>
                                        {input}
                                    </option>
                                )}
                            </select>
                    )}
                <PrimaryButton type="submit">
                    {buttonText}
                </PrimaryButton>
                <ErrorList
                    errors={errors}
                />
            </FormWrapper>
        </>

    )
}
