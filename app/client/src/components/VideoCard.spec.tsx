import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VideoCard } from './VideoCard';

const mockVideo = {
  video: {
    id: 'vid_001',
    snippet: {
      title: 'Test Video Title',
      publishedAt: '2025-01-01T00:00:00.000Z',
      channelTitle: 'Test Channel',
      thumbnails: {
        high: {
          url: 'https://placehold.co/640x360/1e1e1e/667eea?text=Test',
        },
      },
    },
    statistics: {
      viewCount: '1000',
      likeCount: '100',
      commentCount: '10',
    },
  },
  FriendlyDate: 'hace 5 dias',
  Hype: 150,
};

describe('VideoCard', () => {
  it('renders video title', () => {
    render(<VideoCard video={mockVideo as any} />);
    expect(screen.getByText('Test Video Title')).toBeDefined();
  });

  it('renders channel name', () => {
    render(<VideoCard video={mockVideo as any} />);
    expect(screen.getByText('Test Channel')).toBeDefined();
  });

  it('renders view count', () => {
    render(<VideoCard video={mockVideo as any} />);
    expect(screen.getByText(/vistas/)).toBeDefined();
  });

  it('renders hype badge', () => {
    render(<VideoCard video={mockVideo as any} />);
    expect(screen.getByText(/HYPE: 150/)).toBeDefined();
  });

  it('renders FriendlyDate', () => {
    render(<VideoCard video={mockVideo as any} />);
    expect(screen.getByText('hace 5 dias')).toBeDefined();
  });

  it('adds featured class when isFeatured is true', () => {
    const { container } = render(<VideoCard video={mockVideo as any} isFeatured={true} />);
    expect(container.querySelector('.video-card.featured')).toBeDefined();
  });

  it('does not have featured class when isFeatured is false', () => {
    const { container } = render(<VideoCard video={mockVideo as any} isFeatured={false} />);
    expect(container.querySelector('.featured')).toBeNull();
  });
});