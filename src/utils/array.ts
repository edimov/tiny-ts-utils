export type TreeNode<T> = {
  value: T;
  children?: TreeNode<T>[];
};

export function bfs<T>(root: TreeNode<T>, target: T): boolean {
  const queue: TreeNode<T>[] = [root];
  while (queue.length) {
    const node = queue.shift()!;
    if (node.value === target) return true;
    if (node.children) queue.push(...node.children);
  }
  return false;
}

export function dfs<T>(node: TreeNode<T>, target: T): boolean {
  if (node.value === target) return true;
  if (node.children) {
    for (const child of node.children) {
      if (dfs(child, target)) return true;
    }
  }
  return false;
}

export function binarySearchSplit(arr: number[], target: number): boolean {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}

export function mergeArrays<T>(a: T[], b: T[]): T[] {
  return Array.from(new Set([...a, ...b]));
}
