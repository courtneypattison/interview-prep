export class ListNode {
  public data: Object;
  public next: ListNode | null = null;

  constructor(data: Object) {
    this.data = data;
  }
}

class LinkedList {
  public next: ListNode | null = null;

  /**
   * insertAfter
   */
  public insertAfter(node: ListNode, newNode: ListNode) {
    const currentNode = this.getNode(node);
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  /**
   * insertBeginning
   */
  public insertBeginning(newNode: ListNode) {
    if (newNode) {
      newNode.next = this.next;
      this.next = newNode;
    }
  }

  /**
   * removeAfter
   */
  public removeAfter(node: ListNode): ListNode | null {
    const currentNode = this.getNode(node);
    let removedNode = null;
    if (currentNode && currentNode.next) {
      removedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
    }
    return removedNode;
  }

  /**
   * removeBeginning
   */
  public removeBeginning(): ListNode | null {
    let removedNode = null;
    if (this.next) {
      removedNode = this.next;
      if (this.next.next) {
        this.next = this.next.next;
      }
    }
    return removedNode;
  }

  /**
   * traverse
   */
  public traverse(callback: Function) {
    let currentNode = this.next;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  private getNode(node: ListNode) {
    let currentNode = this.next;
    while (currentNode && currentNode !== node) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export default LinkedList;
