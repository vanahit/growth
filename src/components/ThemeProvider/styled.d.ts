import {colors} from "./variables/colors.ts";
import {fontSizes} from "./variables/fontSizes.ts";
import {spacings} from "./variables/spacings.ts";
import {radiuses} from "./variables/radiuses.ts";
import {fontWeights} from "./variables/fontWeights.ts";
import {fonts} from "./variables/fonts.ts";
import {boxShadows} from "./variables/boxShadows.ts";
import {mediaSizes} from "./variables/mediaSizes.ts";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof colors;
        fontSizes: typeof fontSizes;
        spacings: typeof spacings;
        radiuses: typeof radiuses;
        fontWeights: typeof fontWeights;
        fonts: typeof fonts;
        boxShadows: typeof boxShadows;
        mediaSizes: typeof mediaSizes;
        icon: {
            color: string;
        }
        main: {
            maxScreenWidth: string;
            background: string,
            secondaryBackgroundColor: string;
            textColor: string,
        },
        header: {
            background: string;
            borderColor: string;
        }
        navbar: {
            navItemBackground: string;
            textColor: string;
            background: string;
        };
        table: {
            headerBackground: string;
            headerText: string;
            headerHover: string;
            bodyBackground: string;
            rowEven: string;
            rowOdd: string;
            rowHover: string;
            border: string;
        },
        pagination: {
            buttonBackground: string;
            buttonText: string;
            buttonHover: string;
            buttonDisabled: string;
        },
        list: {
            itemPadding: string;
            itemMargin: string;
            itemBackground: string;
            itemHoverBackground: string;
        };
        input: {
            borderColor: string;
            background: string;
            textColor: string;
            padding: string;
            borderRadius: string;
        };
        button: {
            background: string;
            textColor: string;
            hoverBackground: string;
            disabledBackground: string;
            disabledTextColor: string;
        },
        emptyState: {
            textColor: string,
            backgroundColor: string,
            borderColor: string,
        },

    }
}
