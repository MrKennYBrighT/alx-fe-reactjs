import Layout from './Layout';

function Home() {
  const contentStyle = {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    color: '#333',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  return (
    <Layout>
      <div style={contentStyle}>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
      </div>
    </Layout>
  );
}

export default Home;
