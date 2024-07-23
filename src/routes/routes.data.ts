import { lazy} from "react";
import {ERoutePath, TRoute} from "./routes.types.ts";

const Posts = lazy(() => import('../pages/Posts'));
const Users = lazy(() => import('../pages/Users'));
const UserDetails = lazy(() => import('../pages/Users/UserDetails'));


export const routes: TRoute[] = [
    {
        path: "/",
        element: Posts,
        title: 'Home',
    },
    {
        path: `/${ERoutePath.USERS}`,
        element: Users,
        title: 'Users'
    },
    {
        path: `/${ERoutePath.USERS}/:id`,
        element: UserDetails,
        hide: true,
    }
];

