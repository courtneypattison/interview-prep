import LinkedList, { ListNode } from "./linkedList";
import { kthToLast } from "./2.2returnKthToLast";

describe("kthToLast", () => {
  test("kthToLast(list, 2) [a, b, c] -> b", () => {
    const list = new LinkedList();
    list.insertBeginning(new ListNode("c"));
    list.insertBeginning(new ListNode("b"));
    list.insertBeginning(new ListNode("a"));
    const node = kthToLast(list, 2);
    expect(node?.data).toEqual("b");
  });

  test("kthToLast(list, 1) [a, b, c] -> b", () => {
    const list = new LinkedList();
    list.insertBeginning(new ListNode("c"));
    list.insertBeginning(new ListNode("b"));
    list.insertBeginning(new ListNode("a"));
    const node = kthToLast(list, 1);
    expect(node?.data).toEqual("c");
  });

  test("kthToLast(list, 3) [a, b, c] -> b", () => {
    const list = new LinkedList();
    list.insertBeginning(new ListNode("c"));
    list.insertBeginning(new ListNode("b"));
    list.insertBeginning(new ListNode("a"));
    const node = kthToLast(list, 3);
    expect(node?.data).toEqual("a");
  });
});
