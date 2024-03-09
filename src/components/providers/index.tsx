'use client';

import React, { ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import getTheme from '@/theme';
import { SnackbarProvider } from 'notistack';

const Providers = ({ children }: { children: ReactNode }) => {
  const theme = createTheme(getTheme('dark'));

  return (
    <AppRouterCacheProvider>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SnackbarProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;
