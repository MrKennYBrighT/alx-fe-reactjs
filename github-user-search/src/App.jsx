// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Simple page components
function Home() {
  return <h2>Home Page 🏠</h2>;
}

function About() {
  return <h2>About Page 📘</h2>;
}

function Contact() {
  return <h2>Contact Page 📞</h2>;
}

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        {/* Layout Header */}
        <header>
          <h1>Welcome to KennYBrighT React App 🚀</h1>
          <nav>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
