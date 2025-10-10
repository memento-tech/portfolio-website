import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import FullContainer from "./components/FullContainer";
import ScrollToTop from "./components/ScrollToTop";
import styled, { ThemeProvider } from "styled-components";
import backgroundImage from "./assets/inspiration-geometry.png";
import { blackTheme, defaultTheme } from "./Theme";
import { useEffect, useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const updateCurrentTheme = (blackThemeActive) => {
    setCurrentTheme(blackThemeActive ? blackTheme : defaultTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <FullContainer>
        <FullContainerBackground />
        <BrowserRouter>
          <ScrollToTop />
          <NavBar onThemeChange={updateCurrentTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </FullContainer>
    </ThemeProvider>
  );
}

export default App;

const FullContainerBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  background-size: 300px 300px;
`;
