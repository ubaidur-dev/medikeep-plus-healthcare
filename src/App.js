import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      <nav className="nav-bar">
        <h2 onClick={() => setCurrentPage('home')} style={{ color: '#3498db', margin: 0, cursor: 'pointer', fontSize: '28px', fontWeight: '900' }}>
          MediKeep+
        </h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {currentPage === 'home' ? (
            <>
              <button className="btn-main" style={{ background: 'transparent', color: '#2d3436', border: '1px solid #dfe6e9' }}>Login</button>
              <button className="btn-main">Register</button>
            </>
          ) : (
            <>
              <button onClick={() => setCurrentPage('dashboard')} className="btn-main" style={{ background: currentPage === 'dashboard' ? '#3498db' : '#f1f2f6', color: currentPage === 'dashboard' ? '#fff' : '#2c3e50' }}>Dashboard</button>
              <button onClick={() => setCurrentPage('inventory')} className="btn-main" style={{ background: currentPage === 'inventory' ? '#3498db' : '#f1f2f6', color: currentPage === 'inventory' ? '#fff' : '#2c3e50' }}>Pharmacy Box</button>
              <button onClick={() => setCurrentPage('home')} className="btn-main" style={{ background: '#fff', color: '#e74c3c', border: '1px solid #e74c3c' }}>Exit</button>
            </>
          )}
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        {currentPage === 'home' && <Home startApp={() => setCurrentPage('dashboard')} />}
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'inventory' && <Inventory />}
      </main>
    </div>
  );
}

export default App;