import React, { useContext } from "react";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";
import HomeScreen from "./screens/Homescreen";
import Playground from "./screens/playground";
import GlobalStyles from "./styles/globals";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Page404 from "./screens/page404";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "styled-components";
// import { useLocation } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext)!;

  return (
    // <ThemeProvider>
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyles />
        {/* <HomeScreen /> */}
        {/* <Playground /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/code/:folderId/:playgroundId"
              element={<Playground />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
    // </ThemeProvider>
  );
}

export default App;
