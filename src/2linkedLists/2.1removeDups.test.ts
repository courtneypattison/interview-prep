import LinkedList, { ListNode } from "./linkedList";
import { removeDups } from "./2.1removeDups";

test("[1, 1, 2, 4, 5, 4, 4] -> [1, 2, 4, 5]", () => {
  let list = new LinkedList();
  list.insertBeginning(new ListNode(4));
  list.insertBeginning(new ListNode(4));
  list.insertBeginning(new ListNode(5));
  list.insertBeginning(new ListNode(4));
  list.insertBeginning(new ListNode(2));
  list.insertBeginning(new ListNode(1));
  list.insertBeginning(new ListNode(1));
  removeDups(list);

  const listNoDups = new LinkedList();
  listNoDups.insertBeginning(new ListNode(5));
  listNoDups.insertBeginning(new ListNode(4));
  listNoDups.insertBeginning(new ListNode(2));
  listNoDups.insertBeginning(new ListNode(1));

  for (
    let n1 = list.next, n2 = listNoDups.next;
    n1 && n2;
    n1 = n1.next, n2 = n2.next
  ) {
    expect(n1.data).toEqual(n2.data);
  }
});
