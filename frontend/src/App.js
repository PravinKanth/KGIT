import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  </Router>

  );
}

export default App;
