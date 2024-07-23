import styled from 'styled-components';
import {Row} from "components/Grid";


export const SPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    background-color: ${({ theme }) => theme.main.background};
`;

export const SHeader = styled(Row)`
    height: 40px;
    max-width: 1200px;
    width: 100%;
    text-align: left;
    margin-bottom: ${({theme}) => theme.spacings.xl}; /* Space for fixed header */
    font-size: ${({theme}) => theme.fontSizes.xl};
    color: ${({theme}) => theme.main.textColor};
    h1 {
        display: inline-block;
        font-size: ${({theme}) => theme.fontSizes.xxl};
        font-weight: ${({theme}) => theme.fontWeights.bold};
    }
  .actions {
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
  }
  svg {
        transition: 0.3s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const SBackButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.main.textColor};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SMainContent = styled.main`
    margin-top: ${({theme}) => theme.spacings.xl}; /* Space for fixed header */
    margin: ${({theme}) => theme.spacings.lg} auto;
    max-width: 1200px;
    height: calc(100vh - 180px);
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`;
