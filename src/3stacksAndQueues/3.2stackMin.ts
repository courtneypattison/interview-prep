export default class Stack {
	private stack: any[] = [];
	private minStack: any[] = [];

	push(data: any) {
		this.stack.push(data);
		if (!this.minStack || this.min() >= data) {
			this.minStack.push(data);
		}
	}

	pop(): any | undefined {
           const data = this.stack.pop();
		if (this.min() == data) {
			this.minStack.pop();
		}
		return data;
	}

	min(): any | undefined {
		return this.peek(this.minStack);
	}

	private peek(stack: any[]): any | undefined {
		return stack[stack.length - 1];
	}
}
