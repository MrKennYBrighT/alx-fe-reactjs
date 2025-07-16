// Footer.jsx
import React from 'react';

function Footer() {
  const style = {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    fontSize: '0.9rem',
    marginTop: '40px',
  };

  return (
    <footer style={style}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
