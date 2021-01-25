export class Graph {
  public nodes: GraphNode[];
}

export class GraphNode {
  public name: string;
  public children: GraphNode[];

  constructor(name: string) {
    this.name = name;
  }
}
