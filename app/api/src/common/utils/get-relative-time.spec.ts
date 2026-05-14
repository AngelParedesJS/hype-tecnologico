import { getRelativeTime } from './get-relative-time';

describe('getRelativeTime', () => {
  it('should return a near-past relative time for very recent dates', () => {
    const now = new Date().toISOString();
    const result = getRelativeTime(now);
    expect(result).toMatch(/^(ahora|en \d+ segundo)/);
  });

  it('should return "en el futuro" for future dates', () => {
    const future = new Date(Date.now() + 10000).toISOString();
    expect(getRelativeTime(future)).toBe('en el futuro');
  });

  it('should return a past relative time string for past dates', () => {
    const past = new Date(Date.now() - 3600000).toISOString();
    const result = getRelativeTime(past);
    expect(result).toMatch(/hace/);
  });
});