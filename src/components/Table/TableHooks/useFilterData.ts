import { useState, useEffect } from 'react';

const useFilterSearchData = <T,>(data: T[], filterQuery: string, filterKeys: (keyof T)[]) => {
    const [filteredData, setFilteredData] = useState<T[]>(data);

    useEffect(() => {
        if (filterQuery) {
            const lowercasedFilter = filterQuery.toLowerCase();
            const filtered = data.filter(item =>
                filterKeys.some(key =>
                    String(item[key]).toLowerCase().includes(lowercasedFilter)
                )
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [data, filterQuery, filterKeys]);

    return filteredData;
};

export default useFilterSearchData;
