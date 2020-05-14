import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
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
    <Router>
    <div>
    <Nav />
    <Wrapper>
  <Route exact path="/React-Portfolio" component={Portfolio} />
  <Route exact path="/contact" component={Contact} />
  </Wrapper>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
