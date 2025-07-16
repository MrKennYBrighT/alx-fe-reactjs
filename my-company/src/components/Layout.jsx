// Layout.jsx
function Layout({ children }) {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#fafafa',
    minHeight: '80vh',
  };

  return <div style={containerStyle}>{children}</div>;
}

export default Layout;
