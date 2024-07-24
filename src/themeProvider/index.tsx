import React, {createContext, useState, ReactNode, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import {lightTheme} from './themes/lightTheme.ts';
import {darkTheme} from './themes/darkTheme.ts';
import GlobalStyles from "./styles/globalStyles.ts";

interface ThemeContextProps {
    setCurrentTheme: () => void;
    currentTheme: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeContextProps>({
    setCurrentTheme: () => {},
    currentTheme: 'light',
});

const ThemeProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (storedTheme) {
            setCurrentTheme(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    const theme = currentTheme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setCurrentTheme: toggleTheme, currentTheme }}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProviderComponent;
