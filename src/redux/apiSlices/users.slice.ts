import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TPageableDataWithContentDB, TPageableDataWithContentUI} from "redux/types/pageableData.types.ts";
import {TUserDB, TUserUI} from "redux/types/users.types.ts";
import {usersConverter} from "redux/converters/users.converters.ts";
import {pageableDataConverter} from "redux/converters/pageableData.converters.ts";


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<TPageableDataWithContentUI<TUserUI[]>, void>({
            query() {
                return {
                    url: `https://randomuser.me/api/?results=50`,
                    method: 'GET',
                };
            },
            providesTags: ["Users"],
            transformResponse: (response: TPageableDataWithContentDB<TUserDB[]>) => ({
                content: response.results.map(item => usersConverter.fromDb(item)),
                paginationData: pageableDataConverter.fromDb(response.info)
            }),
        }),
        deleteUser: builder.mutation<void, string>({
            query: () => ({
                url: `https://jsonplaceholder.typicode.com/users/${1}`,
                method: 'DELETE',
            }),
            // Optimistically update the cache
            onQueryStarted: async (id, {dispatch, queryFulfilled}) => {
                // Optimistic UI update
                const patchResult = dispatch(
                    usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
                        // Remove the deleted user from the cache
                        const findIndex = draft.content.findIndex(item => item.id === id)
                        draft.content.splice(findIndex, 1);
                    })
                );
                try {
                    await queryFulfilled;
                } catch {
                    // Rollback on failure
                    patchResult.undo();
                }
            },
        }),
    }),
});

export const {useGetUsersQuery, useDeleteUserMutation} = usersApi;
