function Services() {
  const style = {
    padding: '40px',
    backgroundColor: '#fdfdfd',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const listStyle = {
    paddingLeft: '20px',
    lineHeight: '1.8',
  };

  return (
    <div style={style}>
      <h1>Our Services</h1>
      <ul style={listStyle}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
