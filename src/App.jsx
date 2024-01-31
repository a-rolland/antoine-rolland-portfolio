import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledApp } from "./styles";
import { useState, lazy, Suspense } from "react";

const Homepage = lazy(() => import("./components/Homepage/Homepage.jsx"));
const Navbar = lazy(() => import("./components/Navbar/Navbar.jsx"));
const Works = lazy(() => import("./components/Works/Works.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));

const App = () => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    language === "english" ? setLanguage("spanish") : setLanguage("english");
  };

  return (
    <BrowserRouter>
      <StyledApp>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar lang={language} handleToggleLanguage={toggleLanguage} />
          <Routes>
            <Route path="/" element={<Homepage lang={language} />} />
            <Route path="/about" element={<About lang={language} />} />
            <Route path="/works" element={<Works lang={language} />} />
          </Routes>
        </Suspense>
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
