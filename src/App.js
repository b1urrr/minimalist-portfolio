import React from 'react';
import { Header, Resume, Projects, Footer } from './containers';
import { Navbar } from './components';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
