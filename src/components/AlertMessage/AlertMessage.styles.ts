import styled from "styled-components";
import {TSize} from "components/ThemeProvider/variables/mediaSizes.ts";
import {colors} from "components/ThemeProvider/variables/colors.ts";
import {TAlertMessageType} from "./AlertMessage.type.ts";

const messageColorsByType: {
    [key in TAlertMessageType]: {
        bg: string;
        color: string;
    }
} = {
    success: {
        bg: colors.greenWithOpacity,
        color: colors.green,
    },
    danger: {
        bg: colors.redWithOpacity,
        color: colors.red,
    },
    info: {
        bg: colors.blueWithOpacity,
        color: colors.blue,
    },
    warning: {
        bg: colors.orangeWithOpacity,
        color: colors.orange,
    },
    default: {
        bg: 'transparent',
        color: 'transparent',
    }

}
export const SAlertMessage = styled.p<{ $size: TSize, $show?: boolean, $type: TAlertMessageType }>`
    color: ${({$type}) => messageColorsByType[$type].color};
    display: flex;
    gap: 12px;
    align-items: center;
    margin: ${({theme}) => theme.spacings.lg} 0;
    border-radius: ${({theme}) => theme.radiuses.sm};
    background-color: ${({$type}) => messageColorsByType[$type].bg};
    font-size: ${({theme, $size}) => theme.fontSizes.md || $size};
    height: ${({$show}) => ($show ? '36px' : 0)};
    padding: 0 ${({theme}) => theme.spacings.md};
    transition: all ease-in-out 0.5s;
    opacity: ${({$show}) => ($show ? 1 : 0)};

    & {
        svg {
            margin-left: auto;

            path {
                fill: ${({$type}) => messageColorsByType[$type].color};
            }
        }
    }
`;