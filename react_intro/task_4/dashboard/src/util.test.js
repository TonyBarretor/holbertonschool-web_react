import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy function', () => {
  it('should return "Holberton School" when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('should return "Holberton School main dashboard" when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  it('should return the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});
