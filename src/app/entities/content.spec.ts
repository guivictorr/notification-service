import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('A very cool content wow');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('123')).toThrow();
  });

  it('should not be able to create a notification content with less than 240 characters', () => {
    expect(() => new Content('1'.repeat(241))).toThrow();
  });
});
