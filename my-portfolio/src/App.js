import React from 'react';
import './styles/App.scss';

// Components
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Why from './components/Why'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Hero />
      <Why />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
