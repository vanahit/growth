import styled from "styled-components";

export const STableBody = styled.tbody`
    background-color: ${({ theme }) => theme.table.bodyBackground};
`;

export const STableEmptyState = styled.span`
    padding: ${({ theme }) => theme.spacings.md};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    text-align: center;
    color: ${({ theme }) => theme.table.headerText};
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;
