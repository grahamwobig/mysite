import React from "react";
import Header from "./components/Header";
import "./styles/Navbar.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Background from "./components/Background";
import "./styles/App.css";

function Page({ text, id }: { text: string, id: string }) {
  return (
    <section
      id={id}
      style={{
        width: '100%'
      }}>
      <h1>{text}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et aliquam augue, euismod viverra arcu. Mauris placerat orci odio, sed aliquet urna porttitor sed. In hac habitasse platea dictumst. Etiam tristique sollicitudin semper. Maecenas varius ligula vel est mollis, nec accumsan dolor semper. Praesent venenatis cursus massa. Aliquam eget risus in nisi efficitur vehicula ac fringilla leo. Ut placerat, est ut hendrerit varius, dui nibh dapibus dolor, pharetra sollicitudin ex lorem et neque. Sed at tortor ut neque rhoncus efficitur.

        Sed sit amet pharetra nulla. Etiam tincidunt erat sit amet sodales commodo. Fusce at rhoncus leo, vitae lacinia augue. Nulla hendrerit ac enim in imperdiet. Duis a aliquam magna. Nullam nec tincidunt eros. Aliquam vel magna condimentum, ornare dolor vitae, auctor est. Morbi tempor turpis ligula, in cursus sapien fermentum nec. Vestibulum vel sem vel justo tempor porttitor. Aenean ornare justo at orci congue, in vehicula felis aliquam. Nulla eget auctor lectus.

        Maecenas placerat orci dignissim varius vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc consectetur, dui nec porttitor mattis, lacus leo finibus sem, at cursus nisi velit ac metus. Ut non commodo nulla, quis auctor nisi. Aliquam a quam sollicitudin, rhoncus libero vel, porttitor ipsum. Sed congue mi nec nulla sagittis, in tempor massa sollicitudin. Proin elementum eros sit amet varius efficitur. Cras volutpat urna id libero blandit dapibus. Mauris imperdiet dolor id metus vestibulum dignissim.

        Nulla vitae interdum leo. Vestibulum neque magna, pharetra vel lacus eget, congue volutpat augue. Fusce dictum elit congue justo ultricies, vel fringilla neque sodales. Curabitur viverra leo vel nulla euismod, eget congue elit dapibus. Curabitur in leo a magna pretium accumsan non eget turpis. Proin sapien neque, tempor sed eros quis, fringilla sodales metus. Donec vitae semper nisl. Nullam volutpat bibendum magna, nec lacinia turpis blandit sed. Suspendisse euismod nisi in justo feugiat hendrerit. Nunc rhoncus ante et bibendum vestibulum. Curabitur pulvinar laoreet mauris, vestibulum dapibus risus faucibus eget. Suspendisse quis viverra lectus. Integer eget ipsum in mauris gravida vehicula sit amet nec mi.

        Duis a felis consectetur, facilisis nulla eget, suscipit libero. In hac habitasse platea dictumst. Nullam condimentum interdum elit, ut blandit odio dignissim non. Pellentesque porttitor porta posuere. Donec at libero in diam rhoncus placerat accumsan at ligula. Praesent in turpis enim. Proin eu mauris quis velit aliquam ultrices et eget turpis. Nulla ullamcorper, nisl ac laoreet sollicitudin, sem tortor volutpat risus, non fringilla purus ipsum sit amet mauris. Nam ultricies nec leo in elementum.
      </p>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      {/* Should just contain background and container for content */}
      <Background/>
      <div className="app-container">
        {/* Should contain the div with L and R */}
        <div className="app-split">
          <Header/>
          <main className="app-content">
            <About/>
            <Experience/>
            <Page text="Pojects" id="projects"/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App;