import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VideoGrid } from './VideoGrid';

const mockVideos = [
  {
    video: {
      id: 'vid_001',
      snippet: {
        title: 'Featured Video',
        publishedAt: '2025-01-01T00:00:00.000Z',
        channelTitle: 'Channel 1',
        thumbnails: { high: { url: 'https://place.co/img1' } },
      },
      statistics: { viewCount: '1000', likeCount: '100', commentCount: '10' },
    },
    FriendlyDate: 'hace 1 dia',
    Hype: 500,
  },
  {
    video: {
      id: 'vid_002',
      snippet: {
        title: 'Regular Video 1',
        publishedAt: '2025-01-02T00:00:00.000Z',
        channelTitle: 'Channel 2',
        thumbnails: { high: { url: 'https://place.co/img2' } },
      },
      statistics: { viewCount: '500', likeCount: '50', commentCount: '5' },
    },
    FriendlyDate: 'hace 2 dias',
    Hype: 200,
  },
  {
    video: {
      id: 'vid_003',
      snippet: {
        title: 'Regular Video 2',
        publishedAt: '2025-01-03T00:00:00.000Z',
        channelTitle: 'Channel 3',
        thumbnails: { high: { url: 'https://place.co/img3' } },
      },
      statistics: { viewCount: '300', likeCount: '30', commentCount: '3' },
    },
    FriendlyDate: 'hace 3 dias',
    Hype: 100,
  },
];

describe('VideoGrid', () => {
  it('renders empty message when no videos', () => {
    render(<VideoGrid videos={[]} />);
    expect(screen.getByText('No hay videos disponibles')).toBeDefined();
  });

  it('renders all videos', () => {
    render(<VideoGrid videos={mockVideos as any} />);
    expect(screen.getByText('Featured Video')).toBeDefined();
    expect(screen.getByText('Regular Video 1')).toBeDefined();
    expect(screen.getByText('Regular Video 2')).toBeDefined();
  });

  it('renders first video as featured', () => {
    const { container } = render(<VideoGrid videos={mockVideos as any} />);
    const featuredCards = container.querySelectorAll('.video-card.featured');
    expect(featuredCards.length).toBe(1);
  });
});