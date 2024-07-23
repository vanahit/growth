import {memo, ReactNode} from "react";
import {TTableRowProps} from "../Table.types.ts";
import {STableDataCell, STableRow} from "./TableRow.styles.ts";

const TableRow = memo(<T, >({row, columns, rowIndex}: TTableRowProps<T>) => {
    return (
        <STableRow>
            {columns.map((column) => (
                    column.key !== 'actions' ? (
                        <STableDataCell key={String(column.key)} $align={column.align}>
                            {column.render ? column.render({value: row[column.key as keyof typeof row], row, rowIndex}) : row[column.key as keyof typeof row] as ReactNode}
                        </STableDataCell>
                    ) : (
                        column.render ? <STableDataCell  $align={column.align} key="actions">
                            {column.render({row, rowIndex})}
                        </STableDataCell> : null
                    )
                )
            )}
        </STableRow>
    );
});

export { TableRow };