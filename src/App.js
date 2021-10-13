import './App.css';
import React from 'react';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about'
import { Services } from './components/services/services' 
import { Contact } from './components/contact/contact' 
import { Footer } from './components/footer/footer'

function App() {

  return (
    <div className="_app">
      <Header/>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
