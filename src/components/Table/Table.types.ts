import { ReactNode } from 'react';


export type TRender<T> = ({value, row, rowIndex}: {value?: T[keyof T], row: T, rowIndex: number}) => ReactNode ;

export interface ITableProps<T> {
    columns: ITableColumn<T>[];
    data: T[];
    sortConfig?: ISortConfig<T>;
    onSortChange?: (sortConfig: ISortConfig<T>) => void;
    currentPage: number;
    onPageChange: (page: number) => void;
    loading?: boolean;
    emptyText?:string;
    pageSize?: number;
    filterQuery: string;
    filterKeys: (keyof T)[];
}

export type TAlign = 'center' | 'right' | 'left';

export interface ITableColumn<T> {
    key: string;
    header: ReactNode;
    render?: TRender<T>
    sortable?: boolean;
    width?: string;
    align?: TAlign;
}

export interface ISortConfig<T> {
    key: keyof T;
    direction: 'asc' | 'desc';
}

export interface TTableRowProps<T> {
    row: T;
    columns: ITableColumn<T>[];
    rowIndex: number;
}

export interface ITableHeaderProps<T> {
    columns: ITableColumn<T>[];
    onSortChange?: (key: { key: keyof T; direction: "asc" | "desc" }) => void;
    sortConfig?: { key: keyof T; direction: 'asc' | 'desc' } | null;
}

export interface ITableBodyProps<T> {
    data: T[];
    columns: ITableColumn<T>[];
    loading?: boolean;
    emptyText?: string
}

declare module "react" { // augment React types
    function memo<A, B>(Component: (props: A) => B): (props: A) => React.ReactElement | null
    // return type is same as ReturnType<ExoticComponent<any>>
}