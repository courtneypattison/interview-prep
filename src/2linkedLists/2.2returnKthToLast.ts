import LinkedList, { ListNode } from './linkedList';

export function kthToLast(list: LinkedList, k: number): ListNode | null {
	let node: ListNode | null = list.next
  let runner = list.next
  
	for (let i = 0; i < k; i++, runner = runner.next) {
    if (!runner) return null;
	}

	for (; runner && node; runner = runner.next, node = node.next) {}

	return node;
}
