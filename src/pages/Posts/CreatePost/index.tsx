import React, { ChangeEvent, useState, Suspense, lazy } from 'react';
import { useAddPostMutation } from 'redux/apiSlices/posts.slice.ts';
import { TRtkErrorType } from 'redux/types/api.types.ts';
import Loading from "components/Loading";
import { ICreatePostProps } from './CreatePost.types.ts';

// Dynamically import components
const Popup = lazy(() => import('components/Popup'));
const Col = lazy(() => import('components/Grid').then(module => ({ default: module.Col })));
const Row = lazy(() => import('components/Grid').then(module => ({ default: module.Row })));
const Input = lazy(() => import('components/Input').then(module => ({ default: module.Input })));
const Textarea = lazy(() => import('components/Input').then(module => ({ default: module.Textarea })));
const AlertMessage = lazy(() => import('components/AlertMessage'));


const CreatePost = ({ children }: ICreatePostProps) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [open, setOpen] = React.useState(false);
    const [postTitle, setPostTitle] = React.useState("");
    const [postDescription, setPostDescription] = React.useState("");
    const [addPost, { isLoading }] = useAddPostMutation();

    const onAlertClose = () => {
        setError('');
        setSuccess('');
    };

    const onFormReset = () => {
        setPostDescription('');
        setPostTitle('');
        onAlertClose();
    };

    const onClose = () => {
        onFormReset();
        setOpen(false);
    };

    const onPostTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPostTitle(e.target.value);
    };

    const onPostDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostDescription(e.target.value);
    };

    const handleAddPost = async () => {
        if (postTitle === "" || postDescription === "") {
            setError('Both fields are mandatory!');
        } else {
            try {
                await addPost({ title: postTitle.trim(), body: postDescription.trim() }).unwrap();
                onFormReset();
                setSuccess('Post successfully added!');
            } catch (error) {
                const err = error as TRtkErrorType;
                setError(err?.data?.message || 'Something went wrong!');
            }
        }
    };

    const clonedChildren = React.cloneElement(children, {
        onClick: () => setOpen(true),
    });

    return (
        <Suspense fallback={<Loading />}>
            <Popup
                loading={isLoading}
                onSubmit={() => void handleAddPost()}
                submitText='Create'
                cancelText='Cancel'
                open={open}
                onClose={onClose}
                title='Add a new post'
            >
                <Row gutter={[16, 16]} justify='start'>
                    <Col span={24}>
                        <h4>Title</h4>
                        <Input
                            placeholder='Type title...'
                            value={postTitle}
                            name='postTitle'
                            onChange={onPostTitleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <h4>Description</h4>
                        <Textarea
                            placeholder='Type description...'
                            value={postDescription}
                            name='postDescription'
                            onChange={onPostDescriptionChange}
                        />
                    </Col>
                    <Col span={24}>
                        <AlertMessage type='success' onClose={onAlertClose} message={success} />
                        <AlertMessage type='danger' onClose={onAlertClose} message={error} />
                    </Col>
                </Row>
            </Popup>
            {clonedChildren}
        </Suspense>
    );
};

export default CreatePost;
