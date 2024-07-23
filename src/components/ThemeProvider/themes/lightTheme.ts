import {colors} from '../variables/colors.ts';
import {fontSizes} from '../variables/fontSizes.ts';
import {spacings} from '../variables/spacings.ts';
import {radiuses} from '../variables/radiuses.ts';
import {boxShadows} from '../variables/boxShadows.ts';
import {fontWeights} from "../variables/fontWeights.ts";
import {mediaSizes} from "../variables/mediaSizes.ts";
import {fonts} from "../variables/fonts.ts";
import {DefaultTheme} from "styled-components";


export const lightTheme: DefaultTheme = {
    colors,
    fontSizes,
    spacings,
    radiuses,
    boxShadows,
    fontWeights,
    mediaSizes,
    fonts,
    icon: {
        color: colors.darkGray
    },
    main: {
        maxScreenWidth: '1200px',
        background: colors.white,
        secondaryBackgroundColor: colors.offWhite,
        textColor: colors.darkGray,
    },
    header: {
        background: colors.white,
        borderColor: colors.hoverLightGray
    },
    navbar: {
        textColor: colors.darkGray,
        navItemBackground: colors.hoverLightGray,
        background: colors.white,
    },
    table: {
        headerBackground: '#f4f4f4',
        headerText: '#333',
        headerHover: '#e0e0e0',
        bodyBackground: '#fff',
        rowEven: '#f9f9f9',
        rowOdd: '#fff',
        rowHover: '#f1f1f1',
        border: '#ddd',
    },
    pagination: {
        buttonBackground: '#f4f4f4',
        buttonText: '#f1f1f1',
        buttonHover: '#babbbf',
        buttonDisabled: '#ccc',
    },
    emptyState: {
        textColor: '#333',
        backgroundColor: '#f8f8f8',
        borderColor: '#ddd',
    },
    list: {
        itemPadding: spacings.md,
        itemMargin: spacings.sm,
        itemBackground: colors.white,
        itemHoverBackground: colors.hoverLightGray,
    },
    input: {
        borderColor: colors.borderLightGray,
        background: colors.offWhite,
        textColor: colors.darkGray,
        padding: spacings.md,
        borderRadius: radiuses.md,
    },
    button: {
        background: colors.backgroundDarkGray,
        textColor: colors.white,
        hoverBackground: colors.hoverLightGray,
        disabledBackground: '',
        disabledTextColor: ''
    },
};
