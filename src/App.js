import React from 'react';
import Home from './pages/Home';
import { Comments } from './pages/Comments';
import Layout from './pages/Layout';
import { Navigation } from './features/navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <header className="Navigation-bar">
          <Navigation />
        </header>
        <Routes>
          <Route path='/' element={<Layout />} />
            <Route index element={<Home />} />
            <Route path='Comments' element={<Comments />} >
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
