import styled from "styled-components";

export const SButton = styled.button<{$outline?: boolean}>`
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacings.sm} ${({ theme }) => theme.spacings.xxl};
    font-size: ${({theme}) => theme.fontSizes.md};
    color: ${({theme, $outline}) =>  $outline ? theme.button.background : theme.button.textColor};
    background-color: ${({$outline, theme}) => $outline ? 'transparent' :  theme.button.background};
    border: ${({$outline, theme}) => $outline ? `1px solid ${theme.button.background}` :'none'};
    border-radius: ${(props) => props.theme.radiuses.md};
    transition: all ease-in-out 0.2s;
    .loading {
        position: absolute;
        right: 4px;
        margin-left: ${({ theme }) => theme.spacings.md};
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    &:hover {
        transform: scale(1.1);
    ;
    }
`;