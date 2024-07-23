import {TSize} from "components/ThemeProvider/variables/mediaSizes.ts";

export type TAlertMessageType = 'success' | 'danger' | 'warning' | 'info' | 'default';
export interface IAlertMessageType {
    message: string;
    delay?: number;
    type: TAlertMessageType;
    size?: TSize
    onClose: () => void;
}