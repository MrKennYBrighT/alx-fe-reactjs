import Layout from './Layout'; 

function Services() {
  const contentStyle = {
    padding: '40px',
    backgroundColor: '#fdfdfd',
    color: '#555',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };

  const listStyle = {
    paddingLeft: '20px',
    lineHeight: '1.8',
  };

  return (
    <Layout>
      <div style={contentStyle}>
        <h1>Our Services</h1>
        <ul style={listStyle}>
          <li>Technology Consulting</li>
          <li>Market Analysis</li>
          <li>Product Development</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Services;
