import React, { useContext } from 'react';
import styled from 'styled-components';
import { primary, typeScale, headingFont } from "../utils"
import { TertiaryButton } from './Buttons';
import { AuthContext } from '../session/AuthContext';

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding-left: 25px;
    background: ${primary[600]}
`

const HeaderContent = styled.h5`
    font-family: ${headingFont};
    font-size: ${typeScale.header5};
    color:  ${primary[100]};
    font-weight: 100;
    text-align: center;
    border-bottom: 1px solid ${primary[100]};
`

export const Header = ({ displayMenu, display }) => {
    const { authState } = useContext(AuthContext)
    return (
        <HeaderWrapper>
            <HeaderContent>G^2 Fitness</HeaderContent>
            {authState.user && <TertiaryButton onClick={() => displayMenu(!display)}> Menu </TertiaryButton>}
        </HeaderWrapper>
    )
}
