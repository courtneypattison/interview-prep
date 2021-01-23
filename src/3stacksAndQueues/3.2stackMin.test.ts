import Stack from './3.2stackMin';

test("push(1), pop(), -> 1", () => {
	const stack = new Stack();
	stack.push(1);
	const data = stack.pop();
	expect(data).toEqual(1);
});

test("min(), -> undefined", () => {
	const stack = new Stack();
	expect(stack.min()).toBeUndefined();
});
