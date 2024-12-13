"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles"; // Используем ThemeProvider
import { createTheme } from "@/styles/theme/create-theme"; // Функция создания темы
import EmotionCache from "./emotion-cache";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function CustomThemeProvider({
  children,
}: ThemeProviderProps): React.JSX.Element {
  const theme = createTheme(); // Создание темы

  return (
    <EmotionCache options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCache>
  );
}
