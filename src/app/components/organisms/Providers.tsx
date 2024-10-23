'use client'
import store from "@/app/store"
import theme from "@/app/theme"
import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material';

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  )
}