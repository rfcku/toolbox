import { createTheme, NextUIProvider as UIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    // colors: {...}, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    // colors: {...}, // optional
  },
});

export const NextUIProvider = ({ children }) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  );
};
