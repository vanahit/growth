import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import {darkTheme} from "themeProvider/themes/darkTheme";
import {ThemeProvider} from "styled-components";

// Custom render function to include themeProvider
const render = (ui: ReactElement, options: Omit<RenderOptions, 'wrapper'> = {}) =>
    rtlRender(ui, { wrapper: ({ children }) => <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { render, darkTheme as theme };

