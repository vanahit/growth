import styled from 'styled-components';
import {mediaSizes} from "components/ThemeProvider/variables/mediaSizes.ts";

const SNavbarContainer = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 100%;
`;

const SNavItemsContainer = styled.ul<{ $isMenuOpen?: boolean }>`
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: row;
    position: relative;
    li > .actions {
        display: none;
    }
    @media ${mediaSizes('max').md} {
        flex-direction: column;
        width: 300px;
        background-color: #ffffff21;
        height: 100vh;
        justify-content: flex-start;
        align-items: start;
        position: fixed;
        z-index: 999;
        right: ${({$isMenuOpen}) => ($isMenuOpen ? '0' : '-301px')};
        top: 0;
        padding: 16px 0;
        box-shadow: -5px 3px 12px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        transition: right ease-in-out 0.3s;
        
        li .actions {
            margin-bottom: 24px;
            width: 100%;
            display: flex;
        }
    }
    @media ${mediaSizes('max').xs} {
        width: 100%;
        right: ${({$isMenuOpen}) => ($isMenuOpen ? '0' : '-101%')};
    }

`;

const SNavItem = styled.li`

    &, & > a {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
    }


    justify-content: flex-end;
    font-size: ${({theme}) => theme.fontSizes.lg};
    color: ${({theme}) => theme.navbar.textColor};
    font-weight: ${({theme}) => theme.fontWeights.semibold};
    text-decoration: none;
    padding: ${({theme}) => theme.spacings.sm} ${({theme}) => theme.spacings.lg};
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover:not(&:has(.actions)), &:has(a.active) {
        background-color: ${({theme}) => theme.navbar.navItemBackground};
        color: ${({theme}) => theme.navbar.textColor};

    }

    @media ${mediaSizes('max').md} {
        width: 100%;
        height: 50px;
        justify-content: center;
    }

`;

export {SNavbarContainer, SNavItemsContainer, SNavItem};