import { mediaSizes } from 'themeProvider/variables/mediaSizes';
import styled from 'styled-components';



const LayoutWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({theme}) => theme.main.background};
    color: ${({theme}) => theme.main.textColor};
`;

const ContentWrapper = styled.main`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;
    margin: 0 auto; /* Centers the content horizontally */
    @media ${mediaSizes('max').sm} {
        padding: 1em;
    }
    & > div:first-of-type {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        
    }
`;


export {LayoutWrapper, ContentWrapper}
