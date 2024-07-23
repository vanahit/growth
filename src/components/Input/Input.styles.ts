import styled, {css} from "styled-components";

// General styles for input-like components
const generalStyles = css`
    & {
        border: none;
        border-radius: ${({ theme }) => theme.radiuses.md};
        width: 100%;
        outline: none;
        font-size: ${({theme}) => theme.fontSizes.md};
        padding: ${({theme}) => theme.spacings.md};
        background-color: ${({theme}) => theme.input.background};
        color: ${({theme}) => theme.input.textColor};
    }
`;


export const SInput = styled.input`
    ${generalStyles};
    height: 50px;
`;

export const STextArea = styled.textarea`
  ${generalStyles};
  height: 200px;
`;
