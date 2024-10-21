'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography:{

  },
  palette: {
      mode: 'dark',
      primary: {
        main: '#f0faff',
        light: '#f0faff',
        dark: '#2A919F',
        contrastText: '#03c',
      },
      secondary: {
        main: '#2A919F',
        light: '#fafefe',
        dark: '#060d27',
        contrastText: '#070053',
      },
      background: {
        default: '#f0faff',
      }
  },
});

export default theme;
