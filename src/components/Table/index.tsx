import Pagination from "components/Pagination";
import {STableContainer} from './Table.styles';
import {ITableProps} from './Table.types';
import useSortData from './TableHooks/useSortData.ts';
import useFilterSearchData from './TableHooks/useFilterData.ts';
import {TableHeader} from './TableHeader';
import {TableBodyExported} from './TableBody';


const Table = <T, >({
                        columns,
                        data,
                        sortConfig,
                        onSortChange,
                        currentPage,
                        onPageChange,
                        pageSize = 10,
                        loading,
                        emptyText,
                        filterQuery,
                        filterKeys
                    }: ITableProps<T>) => {
    const sortedData = useSortData(data, sortConfig);
    const filteredData = useFilterSearchData(sortedData, filterQuery, filterKeys);
    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <>
            <STableContainer>
                <table>
                    <TableHeader columns={columns} onSortChange={onSortChange} sortConfig={sortConfig}/>
                    <TableBodyExported loading={loading} emptyText={emptyText} data={paginatedData} columns={columns}/>
                </table>
            </STableContainer>
            <Pagination
                currentPage={currentPage}
                totalCount={filteredData.length} // Use filteredData length to calculate total pages
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default Table;
