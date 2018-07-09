import React, { Component } from "react";
import "./App.css";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Home from "./home/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
