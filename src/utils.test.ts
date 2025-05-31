import { describe, it, expect } from 'vitest';
import { add, multiply } from './utils/math';
import { capitalize } from './utils/string';

describe('Math Utils', () => {
  it('adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiplies numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe('String Utils', () => {
  it('capitalizes a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
