'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#f0faff',
        light: '#f0faff',
        dark: '#2A919F',
        contrastText: '#03c',
        
      },
      secondary: {
        main: '#2A919F',
        light: '#fdfeff',
        dark: '#060d27',
        contrastText: '#070053',
      },
      background: {
        default: '#f0faff',
      },
      text: {
        primary: '#060d27',
        secondary: '#f0faff',
        disabled: '#f0faff',
      }
  },
});

export default theme;
