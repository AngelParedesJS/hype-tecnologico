import { useState, useEffect } from 'react';
import { VideoGrid } from './components';
import { VideoData } from './types';
import './App.css';

function App() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/videos')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudo conectar con la API');
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Hype Videos</h1>
        <p className="subtitle">Explora los videos más populares</p>
      </header>

      <main className="main">
        {loading ? (
          <div className="loading">
            <div className="spinner" />
            <p>Cargando videos...</p>
          </div>
        ) : error ? (
          <div className="error">
            <p>{error}</p>
          </div>
        ) : (
          <VideoGrid videos={videos} />
        )}
      </main>
    </div>
  );
}

export default App;