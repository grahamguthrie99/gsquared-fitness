import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { primary, typeScale, headingFont } from "../utils"
import styled from 'styled-components';
import SignOut from './SignOut';
import { AuthContext } from '../session/AuthContext';
import { SecondaryButton, TertiaryButton } from './Buttons';

const MenuContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding-left: 5%;
    padding-right: 5%; 
    padding-bottom: 20%;
    background: ${primary[600]} 
`


const MenuTitle = styled.h3`
    font-family: ${headingFont};
    font-size: ${typeScale.header3};
    color:  ${primary[100]};
    font-weight: 100;
    text-align: center;
    border-bottom: 1px solid ${primary[100]};
`

export const Menu = ({ displayMenu }) => {
    const { authState } = useContext(AuthContext);
    const routes = [
        {
            link: '/activitylog',
            name: 'Activity Log'
        },
        {
            link: '/dashboard',
            name: 'Dashboard',
        }
    ]
    return (
        authState.user && <AuthMenu routes={routes} displayMenu={displayMenu} />

    )
}

const AuthMenu = ({ routes, displayMenu }) => {

    return (
        <MenuContainer>
            <TertiaryButton onClick={() => displayMenu(false)}> Close Menu</TertiaryButton>
            <MenuTitle> G^2 Fitness </MenuTitle>
            {routes.map((input, index) =>
                <Link to={input.link} onClick={() => displayMenu(false)} key={index}><SecondaryButton >{input.name} </SecondaryButton> </Link>)}
            <SignOut displayMenu={displayMenu} />
        </MenuContainer>
    )

}