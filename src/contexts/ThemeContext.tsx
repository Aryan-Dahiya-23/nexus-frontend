/* eslint-disable @typescript-eslint/no-explicit-any */
// AuthContext.tsx
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface ThemeContextProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const defaultThemeContext: ThemeContextProps = {
    theme: "",
    setTheme: () => { }
};

export const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme !== null ? savedTheme : "light";
    });

    useEffect(() => {
        // localStorage.setItem("theme", theme);
        // const localTheme = localStorage.getItem("theme");

        // if (localTheme !== null) {
        //     document.querySelector("html")?.setAttribute("data-theme", localTheme);
        // } else {
        //     document.querySelector("html")?.setAttribute("data-theme", "light");
        // }


        try {
            localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme");

            if (localTheme !== null) {
                document.querySelector("html")?.setAttribute("data-theme", localTheme);
            } else {
                document.querySelector("html")?.setAttribute("data-theme", "light");
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
        }

    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};