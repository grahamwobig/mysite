import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
import Landing from "./components/Landing";
import About from "./components/About";

function Page({ color, text, id }: { color: string, text: string, id: string }) {
  return (
    <div
      id={id}
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
    // <Router>
    //   <Navbar />
    //   <Landing />
    //   <About />
    //   <Routes>
    //     <Route path="/about" element={<Page color="#4281A4" text="About"/>} />
    //     <Route path="/skills" element={<Page color="#48A9A6" text="Skills"/>} />
    //     <Route path="/work" element={<Page color="#E4DFDA" text="Work"/>} />
    //     <Route path="/projects" element={<Page color="#D4B483" text="Projects"/>} />
    //     <Route path="/contact" element={<Page color="#C1666B" text="Contact"/>} />
    //   </Routes>
    // </Router>
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <Landing />
        <About />
        <Page id="work" color="blue" text="Work"/>
        <Page id="projects" color="gray" text="Projects"/>
      </body>
    </>
  )
}

export default App;