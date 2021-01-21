import LinkedList, { ListNode } from "./linkedList";

export function removeDups(list: LinkedList) {
  for (
    let nodeCheck = list.next;
    nodeCheck !== null;
    nodeCheck = nodeCheck.next
  ) {
    for (
      let nodeCurr = nodeCheck.next, nodePrev = nodeCheck;
      nodeCurr !== null;
      nodePrev = nodeCurr, nodeCurr = nodeCurr.next
    ) {
      if (nodeCurr.data == nodeCheck.data) {
        nodePrev.next = nodeCurr.next;
      }
    }
  }
}

export function removeDupsSet(list: LinkedList) {
  const set = new Set();
  for (let prev = null, node = list.next; prev && node; node = node.next) {
    if (set.has(node.data) ) {
      prev.next = node.next;
    } else {
      set.add(node.data);
      prev = node;
    }
  }
}
