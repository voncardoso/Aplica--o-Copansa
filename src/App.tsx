import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./style/style"
import { defaultTheme } from "./style/theme/default"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
     <BrowserRouter>
        <Router/>
     </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
