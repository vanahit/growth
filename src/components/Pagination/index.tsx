import React from 'react';
import {EIconNames, Icon } from 'components/Icon';
import {DOTS, usePagination } from './PaginationHooks/usePagination';
import {SDots, SPaginationContainer, SPaginationItem } from './Pagination.styles';
import {IPaginationProps} from "./Pagination.types.ts";



const Pagination: React.FC<IPaginationProps> = ({
                                                    onPageChange,
                                                    totalCount,
                                                    siblingCount = 1,
                                                    currentPage,
                                                    pageSize,
                                                    className,
                                                }) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || !paginationRange || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];
    return (
        <SPaginationContainer className={className}>
            <SPaginationItem
                onClick={onPrevious}
                disabled={currentPage === 1}
            >
                <Icon icon={EIconNames.ARROW_LEFT} size={14} />

            </SPaginationItem>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <SDots key={index}>&#8230;</SDots>;
                }

                return (
                    <SPaginationItem
                        key={index}
                        onClick={() => onPageChange(pageNumber as number)}
                        $active={pageNumber === currentPage}
                    >
                        {pageNumber}
                    </SPaginationItem>
                );
            })}
            <SPaginationItem
                onClick={onNext}
                disabled={currentPage === lastPage}
            >
                <Icon icon={EIconNames.ARROW_RIGHT} size={14} />
            </SPaginationItem>
        </SPaginationContainer>
    );
};

export default Pagination;
