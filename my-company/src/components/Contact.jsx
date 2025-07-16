import { useState } from 'react';
import Layout from './Layout'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const containerStyle = {
    padding: '40px',
    backgroundColor: '#fafafa',
    color: '#333',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };

  const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={{textAlign:'center'}}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            style={inputStyle}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
