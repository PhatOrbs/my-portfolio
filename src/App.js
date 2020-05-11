import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
// import Carousel from "./components/DesignReel/CarouselMat";
// import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer.js"

import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <Nav />
    <Wrapper>
    </Wrapper>
    <Footer />
    </div>
  );
}

export default App;
