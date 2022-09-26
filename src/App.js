import React from 'react';
import './App.css';
import { Navigation } from './features/navigation/Navigation.js';
import { Sidebar } from './features/sidebar/Sidebar';
import { Tiles } from './features/tiles/Tiles.js';


function App() {
  return (
    <div className="App">
      <header className="Navigation-bar">
        <Navigation />
      </header>
      <section className="Main">
        <Tiles />
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
