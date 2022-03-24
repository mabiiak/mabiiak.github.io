import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import FormContact from './components/Contact/FormContact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <FormContact />
    </div>
  );
}

export default App;
