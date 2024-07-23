import { useState, useEffect } from 'react';
import {ISortConfig} from "../Table.types.ts";


const useSortData = <T,>(data: T[], sortConfig: ISortConfig<T> | undefined) => {
    const [sortedData, setSortedData] = useState<T[]>(data);

    useEffect(() => {
        if (sortConfig) {
            const sorted = [...data].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
            setSortedData(sorted);
        } else {
            setSortedData(data);
        }
    }, [data, sortConfig]);

    return sortedData;
};

export default useSortData;
