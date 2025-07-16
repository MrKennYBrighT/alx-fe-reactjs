import Layout from './Layout'; 

function About() {
  const contentStyle = {
    padding: '40px',
    backgroundColor: '#fff',
    color: '#444',
    lineHeight: '1.6',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };

  return (
    <Layout>
      <div style={contentStyle}>
        <h1>About Us</h1>
        <p>
          Our company has been providing top-notch services since 1990. We
          specialize in various fields including technology, marketing, and
          consultancy.
        </p>
      </div>
    </Layout>
  );
}

export default About;
