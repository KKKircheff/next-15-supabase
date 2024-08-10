'use client';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';


export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <CssVarsProvider theme={theme}>
                <CssBaseline />
                {children}
            </CssVarsProvider>
        </AppRouterCacheProvider>
    );
}
