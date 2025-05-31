import { describe, it, expect } from 'vitest';
import {
  bfs,
  dfs,
  binarySearchSplit,
  mergeArrays,
  TreeNode,
} from './array';

describe('Tree Traversal', () => {
  const tree: TreeNode<number> = {
    value: 1,
    children: [
      { value: 2 },
      { value: 3, children: [{ value: 4 }] },
    ],
  };

  it('bfs finds existing value', () => {
    expect(bfs(tree, 4)).toBe(true);
  });

  it('bfs returns false for missing value', () => {
    expect(bfs(tree, 5)).toBe(false);
  });

  it('dfs finds existing value', () => {
    expect(dfs(tree, 4)).toBe(true);
  });

  it('dfs returns false for missing value', () => {
    expect(dfs(tree, 5)).toBe(false);
  });
});

describe('Binary Search (Split Search)', () => {
  const arr = [1, 3, 5, 7, 9];

  it('finds target', () => {
    expect(binarySearchSplit(arr, 5)).toBe(true);
  });

  it('does not find missing target', () => {
    expect(binarySearchSplit(arr, 6)).toBe(false);
  });
});

describe('mergeArrays', () => {
  it('merges arrays and removes duplicates', () => {
    expect(mergeArrays([1, 2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('merges arrays with no overlap', () => {
    expect(mergeArrays(['a'], ['b'])).toEqual(['a', 'b']);
  });
});
