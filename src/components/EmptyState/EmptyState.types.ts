import {EIconNames} from "../Icon";
import {ReactNode} from "react";

export interface IEmptyStateProps {
    message: string;
    icon?: EIconNames
    action?: ReactNode
}
