export interface VideosData {
  items: VideoItem[];
  kind: string;
}

export interface VideoItem {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  title: string;
  publishedAt: string;
  channelTitle: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
}

export interface Statistics {
  likeCount?: string;
  commentCount?: string;
  viewCount?: string;
}

