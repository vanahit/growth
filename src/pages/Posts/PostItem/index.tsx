import {FC, memo} from "react";
import Card from "components/Card";
import {Icon} from "components/Icon";
import {EIconNames} from "components/Icon/Icon.type.ts";
import {useDeletePostMutation} from "redux/apiSlices/posts.slice.ts";
import {IPostProps} from "./Posts.types.ts";

export const PostItem: FC<IPostProps> = ({post, index}) => {
    const {title, id, body,} = post;
    const [deletePost, {isLoading: deleteLoading}] = useDeletePostMutation();

    const handleDeletePost = async () => {
        if (id) {
            await deletePost({id, index}).unwrap();
        }
    };
    return (
        <Card title={title} body={body}
              actions={
                  <Icon icon={EIconNames.DELETE} size={20} loading={deleteLoading} className='pointer'
                        onClick={() => void handleDeletePost()}/>}/>
    );
};

export default memo(PostItem) as typeof PostItem;