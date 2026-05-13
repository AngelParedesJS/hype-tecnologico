import { VideoData } from '../types';
import { VideoCard } from './VideoCard';
import './VideoGrid.css';

interface VideoGridProps {
  videos: VideoData[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="video-grid-empty">
        <p>No hay videos disponibles</p>
      </div>
    );
  }

  return (
    <section className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.video.id} video={video} />
      ))}
    </section>
  );
}