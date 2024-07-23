import {ReactElement} from "react";

export interface IDeleteUser {
    id: string;
    children: ReactElement;
    onSuccess?: () => void;
}