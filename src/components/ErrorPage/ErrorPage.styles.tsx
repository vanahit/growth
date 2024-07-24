import styled from 'styled-components';


export const SErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({theme}) => theme.main.background};
`;

export const SErrorMessage = styled.div`
  text-align: center;
  color: ${({theme}) => theme.main.textColor};
  h1 {
    font-size: 3rem;
    color: $${({theme}) => theme.colors.darkerGray};
    margin-bottom: 16px;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
`;
