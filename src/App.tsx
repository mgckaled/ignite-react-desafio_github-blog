import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Router } from "./Router"

import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/theme/defaultTheme"

export default function App() {
  return (
    <BrowserRouter basename='/ignite-react-desafio_github-blog'>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
