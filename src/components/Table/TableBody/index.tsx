import {memo, useMemo } from "react";
import Loading from "components/Loading";
import { ITableBodyProps } from "../Table.types";
import {STableBody, STableEmptyState } from "./TableBody.styles";
import {TableRow} from "../TableRow";



const TableBody = <T,>({ data, columns, loading, emptyText }: ITableBodyProps<T>) => {
    const content = useMemo(() => {
        if (loading && data.length === 0) {
            return (
                <tr>
                    <td colSpan={columns.length}>
                        <Loading centered />
                    </td>
                </tr>
            );
        }

        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan={columns.length}>
                        <STableEmptyState>{emptyText || 'No data found!'}</STableEmptyState>
                    </td>
                </tr>
            );
        }

        return data.map((row, index) => (
            <TableRow
                key={index}
                row={row}
                columns={columns}
                rowIndex={index}
            />
        ));
    }, [data, columns, loading, emptyText]);

    return <STableBody>{content}</STableBody>;
};



export const TableBodyExported = memo(TableBody);

