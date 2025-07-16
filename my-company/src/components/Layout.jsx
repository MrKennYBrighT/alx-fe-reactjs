function Layout({ children }) {
  const wrapperStyle = {
    width: '100vw',
    minHeight: '100vh',
    padding: '40px',
    boxSizing: 'border-box',
    backgroundColor: '#fafafa',
  };

  return <div style={wrapperStyle}>{children}</div>;
}

export default Layout;
