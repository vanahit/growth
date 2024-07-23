import {TPageableDataDB, TPageableDataUI} from "redux/types/pageableData.types.ts";
import {TFetchConverter} from "redux/types/converters.types.ts";

export const pageableDataConverter: TFetchConverter<TPageableDataUI, TPageableDataDB> = {
    fromDb: ({results}) => {
        return {
            totalElements: results,
            /// here will be other properties in case of real api with real data such as page size, totalPages, pageNumber
        };
    },
};
