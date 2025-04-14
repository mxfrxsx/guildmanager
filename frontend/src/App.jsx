import './App.css'
import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Guild/Dashboard/Dashboard';
import { Memberstatistics } from './pages/Guild/Members/Memberstatistics';
import { Parties } from './pages/Guild/Parties/Parties';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
    <main className='flex h-screen'>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/memberstatistics" element={<Memberstatistics/>}/>
          <Route path="/parties" element={<Parties/>}/>
        </Routes>
    </main>
    </Router>
  );
}

export default App
