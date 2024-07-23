export type TPageableDataDB = {
        results: number
};

export type TPageableDataUI = {
    totalElements?: number;
};
export type TPageableDataWithContentUI<T> = {
    content: T;
    paginationData: TPageableDataUI;
};
export type TPageableDataWithContentDB<T> =  {
    results: T;
    info: TPageableDataDB
};