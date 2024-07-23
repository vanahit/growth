import {colors} from '../variables/colors.ts';
import {lightTheme} from "./lightTheme.ts";
import {DefaultTheme} from "styled-components";
import pagination from "../../Pagination";

export const darkTheme: DefaultTheme = {
    ...lightTheme,
    icon: {
        color: colors.gray
    },
    main: {
        ...lightTheme.main,
        secondaryBackgroundColor: colors.darkGray,
        background: colors.backgroundDark,
        textColor: colors.textLightGray,
    },
    header: {
        background: colors.black,
        borderColor: colors.darkerGray,
    },
    navbar: {
        ...lightTheme.navbar,
        background: colors.black,
        textColor: colors.textLightGray,
        navItemBackground: colors.darkerGray,
    },
    table: {
        headerBackground: '#333',
        headerText: '#f4f4f4',
        headerHover: '#444',
        bodyBackground: '#222',
        rowEven: '#333',
        rowOdd: '#222',
        rowHover: '#555',
        border: '#444',
    },
    pagination: {
        buttonBackground: '#333',
        buttonText: '#f4f4f4',
        buttonHover: '#555',
        buttonDisabled: '#444',
        ...pagination,
    },
    list: {
        ...lightTheme.list,
        itemBackground: colors.backgroundDarkGray,
        itemHoverBackground: colors.hoverDarkGray,
    },
    input: {
        ...lightTheme.input,
        borderColor: colors.borderDarkGray,
        background: colors.darkGray,
        textColor: colors.inputTextLightGray,
    },
    emptyState: {
        textColor: '#ccc',
        backgroundColor: '#333',
        borderColor: '#444',
    },
    button: {
        ...lightTheme.button,
        background: colors.buttonBackgroundGray,
        textColor: colors.textLightGray,
        disabledBackground: colors.disabledDarkGray,
        disabledTextColor: colors.textLightGray,
        hoverBackground: colors.buttonHoverGray,
    },
};
