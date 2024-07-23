import  { Suspense, lazy } from 'react';
import { useGetPostsQuery } from 'redux/apiSlices/posts.slice.ts';
import { TPost } from 'redux/types/posts.types.ts';
import { EIconNames } from 'components/Icon/Icon.type.ts';
import Loading from "components/Loading";
import Page from 'components/Page';

// Dynamically import components
const EmptyState = lazy(() => import('components/EmptyState'));
const CreatePost = lazy(() => import('./CreatePost'));
const Button = lazy(() => import('components/Button'));
const PostItem = lazy(() => import('./PostItem'));


const Posts = () => {
    const { data: posts, isLoading } = useGetPostsQuery();

    return (
        <Suspense fallback={<Loading />}>
            <Page isLoading={isLoading} title="Posts" actions={
                <CreatePost>
                    <Button>Add</Button>
                </CreatePost>
            }>
                {!posts?.length ? (
                    <EmptyState
                        message='No posts found.'
                        icon={EIconNames.FILE}
                        action={
                            <CreatePost>
                                <Button>Add your first post</Button>
                            </CreatePost>
                        }
                    />
                ) : (
                    posts?.map((post: TPost, index) => (
                        <PostItem key={post.id} post={post} index={index} />
                    ))
                )}
            </Page>
        </Suspense>
    );
};

export default Posts;
