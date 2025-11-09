function App() {
  return (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(120deg, #f12020ff 0%, #c9fd6eff 100%)'
    }}>
      <span style={{
        color: '#2a9d8f',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        padding: '40px 50px',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '20px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.15)'
      }}>
        hello people
      </span>
    </div>
  );
}

export default App;
