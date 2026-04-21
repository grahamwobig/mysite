import React from "react";
import Header from "./components/Header";
import "./styles/Navbar.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Background from "./components/Background";

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
    <>
      <Background/>
      <div className="app">
        <div>
          <Header/>
        </div>
        <div className="app-side">
          <About />
          <Page id="work" color="blue" text="Work"/>
          <Page id="projects" color="gray" text="Projects"/>
        </div>
      </div>
    </>
  )
}

export default App;