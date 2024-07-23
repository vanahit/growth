import styled from 'styled-components';

export const STableHeader = styled.thead`
    background-color: ${({theme}) => theme.table.headerBackground};
    color: ${({theme}) => theme.table.headerText};
    border-bottom: 1px solid ${({theme}) => theme.table.border};
    vertical-align: middle;
    & > tr {
        vertical-align: middle;
    }
`;

export const STableHeaderCell = styled.th<{ $sortable?: boolean, $width?: string }>`
    padding: ${({theme}) => theme.spacings.sm};
    cursor: ${({$sortable}) => ($sortable ? 'pointer' : 'default')};
    position: relative;
    width: ${({ $width}) => $width || 'max-content'};
    text-align: center; /* Center align header text */
    border-left: 1px solid ${({theme}) => theme.table.border};
    vertical-align: middle;
    height: 40px;
    &:hover {
        background-color: ${({theme, $sortable}) =>
                $sortable ? theme.table.headerHover : 'inherit'};
    }

    & .sort-icons {
        display: inline-flex;
        flex-direction: column;
        vertical-align: middle;
        margin-left: 8px;
    }

    & > div > span {
        margin: 2px 0;
    }
`;

