// Styled table row
import styled from "styled-components";
import {TAlign} from "../Table.types.ts";


export const STableRow = styled.tr`
    vertical-align: middle;
    &:nth-child(even) {
        background-color: ${({ theme }) => theme.table.rowEven};
    }
    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.table.rowOdd};
    }
    &:hover {
        background-color: ${({ theme }) => theme.table.rowHover};
    }
`;

export const STableDataCell = styled.td<{ $align?: TAlign}>`
    padding: ${({theme}) => theme.spacings.md};
    border-bottom: 1px solid ${({theme}) => theme.table.border};
    width: auto;
    border-left: 1px solid ${({theme}) => theme.table.border};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: ${({$align}) =>  $align || 'left'};
`;