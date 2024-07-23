import styled from 'styled-components';

export const STableContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
    width: 100%;

    table {
        table-layout: fixed;
        flex: 1;
        border: 1px solid ${({theme}) => theme.table.border};
        display: table;
        border-collapse: collapse;
        height: 100%;
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
    }

    margin: ${({theme}) => theme.spacings.md};
`;



