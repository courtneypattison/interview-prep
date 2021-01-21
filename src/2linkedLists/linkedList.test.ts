import LinkedList, { ListNode } from './linkedList';

describe("LinkedList", () => {
  const courtneyNode = new ListNode({name: "Courtney"})
  const shenziNode = new ListNode({name: "Shenzi"})

  it("inserts in beginning", () => {
    const list = new LinkedList();
    list.insertBeginning(courtneyNode);
    expect(list.next?.data).toEqual(courtneyNode.data);
  });

  it("inserts after", () => {
    const list = new LinkedList();
    list.insertBeginning(courtneyNode);
    list.insertAfter(courtneyNode, shenziNode);
    expect(courtneyNode.next).toEqual(shenziNode);
  });

  it("removes after", () => {
    const list = new LinkedList();
    list.insertBeginning(courtneyNode);
    list.insertAfter(courtneyNode, shenziNode);
    const removedNode = list.removeAfter(courtneyNode);
    expect(removedNode).toEqual(shenziNode);
  });

  it("removes beginning", () => {
    const list = new LinkedList();
    list.insertBeginning(courtneyNode);
    list.insertAfter(courtneyNode, shenziNode);
    const removedNode = list.removeBeginning();
    expect(removedNode).toEqual(courtneyNode);
  });

  it("removes beginning when one", () => {
    const list = new LinkedList();
    list.insertBeginning(courtneyNode);
    const removedNode = list.removeBeginning();
    expect(removedNode).toEqual(courtneyNode);
  });

  it("removes nothing when empty", () => {
    const list = new LinkedList();
    const removedNode = list.removeBeginning();
    expect(removedNode).toBeFalsy();
  });

  it("traverses list", () => {
    const list = new LinkedList();
    const listCopy: any[] = [];
    list.insertBeginning(courtneyNode);
    list.insertAfter(courtneyNode, shenziNode);
    list.traverse((node: ListNode) => listCopy.push(node.data));
    expect(listCopy[0].name).toEqual("Courtney");
    expect(listCopy[1].name).toEqual("Shenzi");
  });
});