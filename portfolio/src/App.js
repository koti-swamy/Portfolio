import { Component } from "react";

import {Routes,Route} from "react-router-dom"

import PortFolioContext from "./PortfolioContext";

import Home from "./components/Home/index"

import Skills from "./components/Skills"

import Projects from "./components/Projects"

import Contact from "./components/Contact"


import './App.css';

class App extends Component{
  state={isDarkMode:false}

  onTheme=()=>{
    
    this.setState((prevState)=>({isDarkMode:!prevState.isDarkMode}))
  }

  render(){
    const{isDarkMode}=this.state
    return(
      <PortFolioContext.Provider value={{isDarkMode,onTheme:this.onTheme}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </PortFolioContext.Provider>
    )
  }
}


export default App;
