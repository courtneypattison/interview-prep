import { Graph, GraphNode } from "./graph";

export default function routeBetweenNodes(
  node0: GraphNode,
  node1: GraphNode
): boolean {
  const queues: Array<Array<GraphNode>> = new Array(2);
  const visited: Array<Set<GraphNode>> = new Array(2);

  queues[0] = [];
  queues[1] = [];
  visited[0] = new Set();
  visited[1] = new Set();

  if (visit(node0, 0)) return true;
  if (visit(node1, 1)) return true;

  while (queues[0].length || queues[1].length) {
    if (bfs(0)) return true;
    if (bfs(1)) return true;
  }

  return false;

  function bfs(i: number): boolean {
    const parent = dequeue(i);
    if (parent) {
      if (visit(parent, i)) return true;
      if (visitChildren(parent, i)) return true;
    }
    return false;
  }

  function visit(node: GraphNode, i: number): boolean {
    if (!visited[i].has(node)) {
      visited[i].add(node);
      if (i == 0 && visited[1].has(node)) return true;
      if (i == 1 && visited[0].has(node)) return true;
      enqueue(node, i);
    }
    return false;
  }

  function visitChildren(parent: GraphNode, i: number): boolean {
    if (parent.children) {
      for (let node of parent.children.values()) {
        if (visit(node, i)) return true;
      }
    }
    return false;
  }

  function dequeue(i: number): GraphNode | undefined {
    return queues[i].shift();
  }

  function enqueue(node: GraphNode, i: number): void {
    queues[i].push(node);
  }
}
