import { VideoData } from "../types";
import "./VideoCard.css";

interface VideoCardProps {
  video: VideoData;
  isFeatured?: boolean;
}

export function VideoCard({ video, isFeatured = false }: VideoCardProps) {
  const { video: item, FriendlyDate, Hype } = video;
  const { snippet, statistics } = item;

  const formatStats = (num?: string, stat?: string): string => {
    if (!num) return `0 ${stat}`;
    const value = parseInt(num, 10);
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1)}M ${stat}`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(1)}K ${stat}`;
    }
    return `${value} ${stat}`;
  };

  const getInitial = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <article className={`video-card ${isFeatured ? "featured" : ""}`}>
      <div className="thumbnail-container">
        {isFeatured && <div className="featured-label">LA JOYA DE LA CORONA</div>}
        <img 
          src={snippet.thumbnails.high.url}
          alt={snippet.title}
          className="thumbnail"
        />
        <div className="hype-badge">HYPE: {Hype}</div>
      </div>

      <div className="video-info">
        <div className="channel-row">
          <div className="channel-avatar">
            {getInitial(snippet.channelTitle)}
          </div>
          <span className="channel-name">{snippet.channelTitle}</span>
        </div>

        <h3 className="video-title">{snippet.title}</h3>

        <div className="video-meta">
          <span className="video-stats">{formatStats(statistics.viewCount, "vistas")}</span>
          <span className="video-stats">{formatStats(statistics.likeCount, "likes")}</span>
          <span className="video-stats">{formatStats(statistics.commentCount, "comentarios")}</span>
          <span className="video-stats">{FriendlyDate}</span>
        </div>
      </div>
    </article>
  );
}