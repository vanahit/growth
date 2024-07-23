import styled from 'styled-components';

export const SPaginationContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({theme}) => theme.spacings.md} 0;
    padding: 0;
    list-style-type: none;
`;

export const SPaginationItem = styled.li<{ $active?: boolean; disabled?: boolean }>`
    padding: ${({theme}) => theme.spacings.xs};
    margin: 0 ${({theme}) => theme.spacings.xs};
    cursor: pointer;
    background-color: ${({
                             theme,
                             $active
                         }) => $active ? theme.pagination.buttonHover : theme.pagination.buttonBackground};
    opacity: ${({disabled}) => disabled ? 0.5 : 1};
    pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};

    &:hover {
        background-color: ${({theme}) => theme.pagination.buttonHover};
    }
`;


export const SDots = styled.li`
    padding: ${({theme}) => theme.spacings.sm};
    margin: 0 ${({theme}) => theme.spacings.sm};
    cursor: default;
    border: 1px solid transparent;
`;
