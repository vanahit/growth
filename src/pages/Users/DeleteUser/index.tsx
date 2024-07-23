import {useDeleteUserMutation} from "redux/apiSlices/users.slice.ts";
import React, {FC} from "react";
import {IDeleteUser} from "./DeleteUser.types.ts";

export const DeleteUser:FC<IDeleteUser> = ({children, onSuccess, id}) => {
    const [deleteUser, {isLoading}] = useDeleteUserMutation();
    const onDelete = async () => {
        try {
           await deleteUser(id).unwrap();
           if (onSuccess) onSuccess();
        } catch (err) {
           console.error(err);
        }

    }
    const clonedChildren = React.cloneElement(children, {onClick: onDelete, className: 'pointer', loading: isLoading});
    return (
        <>{ clonedChildren }</>
    );
};

export default DeleteUser;