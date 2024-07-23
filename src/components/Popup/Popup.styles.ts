import styled from 'styled-components';



export const SOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

export const SPopupContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.main.background};
    border-radius: ${({theme}) => theme.radiuses.md};
    box-shadow: ${({theme}) => theme.boxShadows.boxShadow2};
    padding: ${({theme}) => theme.spacings.lg};
    z-index: 1001;
    width: 500px;
    max-width: calc(100% - 32px);
`;

export const SPopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

export const SPopupTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.main.textColor};
  margin: 0;
`;

export const SPopupBody = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.main.textColor};
    text-align: left;
`;