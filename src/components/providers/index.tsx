'use client';

import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import getTheme from '@/theme';
import { SnackbarProvider } from 'notistack';

export const comingSoonDialogContext = createContext<any>({});

const Providers = ({ children }: { children: ReactNode }) => {
  const theme = createTheme(getTheme('dark'));
  const [comingSoonDialogOpen, setComingSoonDialogOpen] = useState(false);

  return (
    <AppRouterCacheProvider>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <comingSoonDialogContext.Provider
            value={{ comingSoonDialogOpen, setComingSoonDialogOpen }}
          >
            {children}
          </comingSoonDialogContext.Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;
