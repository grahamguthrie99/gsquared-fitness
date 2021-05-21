import React from 'react';
import { SecondaryButton } from "./Buttons";
import { primary, typeScale, primaryFont } from "../utils"
import styled from 'styled-components';

const SelectorWrapper = styled.div`
    padding-top: 125px;
`
const SelectorTitle = styled.p`
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph};
    color:  ${primary[100]};
    text-align: center;
`
const SelectorMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`
const FormWrapper = styled.div`
    display: flex;
    padding-top: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
`
const ImageWrapper = styled.div`
    display: flex;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
`

export const FormSelector = ({ selection, setSelection, formOptions, forms, image, title }) => {

    return (
        <SelectorWrapper>
            {selection === 0 && <SelectorTitle> {title} </SelectorTitle>}
            <SelectorMenu>
                {(selection > 0) ? (
                    <SecondaryButton onClick={() => setSelection(0)}>
                        Back
                    </SecondaryButton>) :
                    (
                        <>{
                            formOptions.map((input, index) =>
                                <SecondaryButton key={index} onClick={() => setSelection(index + 1)}>
                                    {input}
                                </SecondaryButton>

                            )
                        }

                        </>
                    )}
            </SelectorMenu>
            {selection > 0 ?
                <FormWrapper>
                    {forms[selection - 1]}
                </FormWrapper> :
                <ImageWrapper>
                    <img src={image} alt='' style={{
                        width: '100%',
                        maxWidth: '400px'
                    }} />
                </ImageWrapper>
            }
        </SelectorWrapper>
    );
}