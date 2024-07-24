import {LazyExoticComponent} from "react";

export type TRoute = {
    path: string;
    element: LazyExoticComponent<() => JSX.Element>
    title?: string;
    hide?: boolean;
}

export enum ERoutePath {
    USERS = 'users',
    PAGE_NOT_FOUND = '404',
}