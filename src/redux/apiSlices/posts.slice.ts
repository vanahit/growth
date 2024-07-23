import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TPost} from 'redux/types/posts.types.ts';
import {EPostPaths} from "redux/urls/posts.url.ts";

const url = EPostPaths.POSTS;
export const postsApiSlice = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<TPost[], void>({
            query: () => `${url}?_limit=10`,
            transformResponse: (response: TPost[]) => response,
            providesTags: (result) =>
                result
                    ? [...result.map(({id}) => ({type: 'Posts' as const, id})), 'Posts']
                    : ['Posts'],
        }),
        addPost: builder.mutation<TPost, TPost>({
            query: (newPost) => ({
                url,
                method: 'POST',
                body: newPost,
            }),
            async onQueryStarted({ ...patch}, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    postsApiSlice.util.updateQueryData('getPosts', undefined, (draftPosts) => {
                        draftPosts.splice(0, 0, {id: draftPosts.length + 1, ...patch})
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()

                    /**
                     * Alternatively, on failure you can invalidate the corresponding cache tags
                     * to trigger a re-fetch:
                     * dispatch(api.util.invalidateTags(['Posts']))
                     */
                }
            },
        }),
        deletePost: builder.mutation<TPost, { id: number, index: number }>({
            query: ({id}) => ({
                url: `${url}/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted({index}, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    postsApiSlice.util.updateQueryData('getPosts', undefined, (draftPosts) => {
                        draftPosts.splice(index, 1)
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }

                /**
                 * Alternatively, on failure you can invalidate the corresponding cache tags
                 * to trigger a re-fetch:
                 * dispatch(api.util.invalidateTags(['Post']))
                 */
            }
        }),
    }),
});

export const {useGetPostsQuery, useAddPostMutation, useDeletePostMutation} = postsApiSlice;
