import { GraphNode } from './graph';
import routeBetweenNodes from './4.1routeBetweenNodes';

describe("routeBetweenNodes", () => {
  it("a -> b -> c (a, c) -> true", () => {
    const a = new GraphNode("a");
    const b = new GraphNode("b");
    const c = new GraphNode("c");

    a.children = [b];
    b.children = [c];

    expect(routeBetweenNodes(a, c)).toBeTruthy();
  });

  it("a -> b  c (a, c) -> false", () => {
    const a = new GraphNode("a");
    const b = new GraphNode("b");
    const c = new GraphNode("c");

    a.children = [b];

    expect(routeBetweenNodes(a, c)).toBeFalsy();
  });

  it("a -> b <- c (a, c) -> true", () => {
    const a = new GraphNode("a");
    const b = new GraphNode("b");
    const c = new GraphNode("c");

    a.children = [b];
    c.children = [b];

    expect(routeBetweenNodes(a, c)).toBeTruthy();
  });
});