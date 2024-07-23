import {memo} from "react";
import {EIconNames, Icon } from "components/Icon/index.tsx";
import {ITableHeaderProps} from "../Table.types.ts";
import {STableHeader, STableHeaderCell} from "./TableHeader.styles.ts";



const TableHeader = memo(<T, >({columns, onSortChange, sortConfig}: ITableHeaderProps<T>) => {
    const handleSort = (key: keyof T) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        onSortChange && onSortChange({key, direction});
    };

    return (
        <STableHeader>
            <tr>
                {columns.map((column) => (
                    <STableHeaderCell
                        $width={column.width}
                        $sortable={column.sortable}
                        key={String(column.key)}
                        onClick={() => column.sortable && handleSort(column.key as keyof T)}
                    >
                        {column.header}
                        {sortConfig && sortConfig.key === column.key ? (
                            <span className='sort-icons'>
                                {sortConfig.direction === 'asc' ? (
                                    <Icon size={16} icon={EIconNames.ARROW_UP}/>
                                ) : (
                                    <Icon size={16} icon={EIconNames.ARROW_DOWN}/>
                                )}
                            </span>
                        ) : (
                            column.sortable && (
                                <span className='sort-icons'>
                                            <Icon size={16} icon={EIconNames.ARROW_UP}/>
                                            <Icon size={16} icon={EIconNames.ARROW_DOWN}/>
                                </span>
                            )
                        )}
                    </STableHeaderCell>
                ))}
            </tr>
        </STableHeader>

    );
});

export  { TableHeader } ;
