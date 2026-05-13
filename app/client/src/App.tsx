import { useState, useEffect } from 'react';

interface HealthResponse {
  status: string;
  timestamp: string;
}

function App() {
  const [apiMessage, setApiMessage] = useState<string>('');
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(fetch('http://localhost:3001'));

  
  useEffect(() => {
    // Fetch from NestJS API
    fetch('http://localhost:3001')
      .then(res => res.text())
      .then(data => setApiMessage(data))
      .catch(() => setApiMessage('API not connected'));

    // Fetch health endpoint
    fetch('http://localhost:3001/api/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(() => setHealth(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Prueba Tecnica - Monorepo</h1>
      </header>
      
      <main>
        <section className="card">
          <h2>Frontend (React + Vite)</h2>
          <p>Status: <span className="status-ok">Running on port 5173</span></p>
        </section>

        <section className="card">
          <h2>Backend (NestJS)</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Message: <strong>{apiMessage}</strong></p>
              {health && (
                <p>
                  Health: <span className="status-ok">{health.status}</span>
                  <br />
                  Timestamp: {health.timestamp}
                </p>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
