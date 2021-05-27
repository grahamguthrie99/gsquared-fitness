import React from 'react';
import { FormDisplay } from './FormDisplay';
import { FormComponent } from './FormComponents';

export const FormFactory = ({ onSubmit, values, setValues, formHeading, buttonText, errors }) => {
    function onChange(event) {
        const { value } = event.target;
        const changeIndex = values.findIndex(({ name }) => name === event.target.name)
        const changedObject = { ...values[changeIndex], value: value }

        setValues(preValues => (
            [...preValues.slice(0, changeIndex),
                changedObject,
            ...preValues.slice(changeIndex + 1)
            ]
        ));

    }
    return (
        <FormDisplay
            onSubmit={onSubmit}
            formHeading={formHeading}
            formComponents={
                values.map((input, index) => <FormComponent
                    key={index}
                    componentType={input.componentType}
                    input={input}
                    index={index}
                    onChange={onChange}
                />
                )}
            buttonText={buttonText}
            errors={errors}
        />
    )
}
