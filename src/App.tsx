import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";

function Page({ color, text }: { color: string, text: string }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100vw',
        height: '100vh',
        paddingTop: 'var(--navbar-height)',
      }}
    > {text} </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<Page color="#4281A4" text="About"/>} />
        <Route path="/skills" element={<Page color="#48A9A6" text="Skills"/>} />
        <Route path="/work" element={<Page color="#E4DFDA" text="Work"/>} />
        <Route path="/projects" element={<Page color="#D4B483" text="Projects"/>} />
        <Route path="/contact" element={<Page color="#C1666B" text="Contact"/>} />
      </Routes>
    </Router>
  )
}

export default App;