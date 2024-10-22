'use client';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
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
        primary: '#f0faff',
        secondary: '#f0faff',
        disabled: '#f0faff',
      }
  },
});

theme = createTheme(theme, {
  palette: {
    highlight: theme.palette.augmentColor({
      color: {
        main: '#f0faff',
        light: '#f0faff',
        dark: '#2A919F',
        contrastText: '#03c',
      },
      name: 'highlight',
    }),
    textLight: theme.palette.augmentColor({
      color: {
        main: '#f0faff',
        light: '#f0faff',
        dark: '#060d27',
        contrastText: '#03c',
      },
      name: 'textLight',
    }),
    textDark: theme.palette.augmentColor({
      color: {
        main: '#060d27',
        light: '#060d27',
        dark: '#f0faff',
        contrastText: '#textDark',
      },
      name: 'salmon',
    }),
    background: theme.palette.augmentColor({
      color: {
        main: '#03c',
        light: '#03c',
        dark: '#03c',
        contrastText: '#03c',
      },
      name: 'background',
    }),
  },
});

export default theme;
