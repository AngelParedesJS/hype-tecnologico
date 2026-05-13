export interface VideoSnippet {
  title: string;
  publishedAt: string;
  channelTitle: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
}

export interface VideoStatistics {
  likeCount?: string;
  commentCount?: string;
  viewCount?: string;
}

export interface VideoItem {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}

export interface VideoData {
  video: VideoItem;
  FriendlyDate: string;
  Hype: number;
}