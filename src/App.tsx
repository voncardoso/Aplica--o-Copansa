import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./style/style";
import { defaultTheme } from "./style/theme/default";
import "./config/firebase";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  useEffect(() =>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
    });
  }, [])
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
