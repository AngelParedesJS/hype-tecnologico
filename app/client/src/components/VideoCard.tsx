import { useState } from 'react';
import { VideoData } from '../types';
import './VideoCard.css';

interface VideoCardProps {
  video: VideoData;
}

export function VideoCard({ video }: VideoCardProps) {
  const { video: item, FriendlyDate, Hype } = video;
  const { snippet, statistics } = item;
  
  const [imgError, setImgError] = useState(false);

  const formatNumber = (num?: string): string => {
    if (!num) return '0';
    const value = parseInt(num, 10);
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(1)}K`;
    }
    return value.toString();
  };

  const thumbnailUrl = imgError 
    ? `https://placehold.co/640x360/1e1e1e/667eea?text=${encodeURIComponent(snippet.channelTitle.charAt(0))}`
    : snippet.thumbnails.high.url;

  return (
    <article className="video-card">
      <div className="thumbnail-container">
        <img
          src={thumbnailUrl}
          alt={snippet.title}
          className="thumbnail"
          onError={() => setImgError(true)}
        />
        <div className="hype-badge" title="Hype Score">
          {Hype.toFixed(2)}
        </div>
      </div>

      <div className="video-info">
        <h3 className="video-title">{snippet.title}</h3>
        
        <p className="channel-name">{snippet.channelTitle}</p>
        
        <div className="video-stats">
          <span>{formatNumber(statistics.viewCount)} Vistas</span>
          <span className="separator">•</span>
          <span>{formatNumber(statistics.likeCount)} Likes</span>
          <span className="separator">•</span>
          <span>{formatNumber(statistics.commentCount)} Comentarios</span>
          <span className="separator">•</span>
          <span>{FriendlyDate}</span>
        </div>
      </div>
    </article>
  );
}