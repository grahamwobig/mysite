import React from "react";
import Header from "./components/Header";
import "./styles/Navbar.css";
//import Landing from "./components/Landing";
import About from "./components/About";
import Background from "./components/Background";
import "./styles/App.css";

function Page({ color, text, id }: { color: string, text: string, id: string }) {
  return (
    <section
      id={id}
      style={{
        backgroundColor: color,
        paddingTop: 'var(--navbar-height)',
        width: '100%',
        height: '100%',
      }}
    > {text} </section>
  );
}

function App() {
  return (
    <div className="app">
      {/* Should just contain background and container for content */}
      {/* <Background/> */}
      <div className="app-container">
        {/* Should contain the div with L and R */}
        <div className="app-split">
          <Header/>
          <main className="app-content">
            <About/>
            <Page color="blue" text="Experience" id="experience"/>
            <Page color="navy" text="Pojects" id="projects"/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App;