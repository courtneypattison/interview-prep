export default class Stacks {
	private stacks: any = [];
  private indexes = new Uint8Array([0, 0, 0]);
  
	private incrementIndexes(first: number) {
		for (let i = first + 1; i < this.indexes.length; i++) {
			this.indexes[i]++;
		}
	}

  private decrementIndexes(first: number) {
		for (let i = first + 1; i < this.indexes.length; i++) {
			this.indexes[i]--;
		}
	}

	push(stackIndex: number, data: any) {
    this.incrementIndexes(stackIndex);
    this.stacks.splice(this.indexes[stackIndex], 0, data);
	}

	pop(stackIndex: number): any {
    this.decrementIndexes(stackIndex);
    return this.stacks.splice(this.indexes[stackIndex], 1)[0];
	}

	peek(stackIndex: number): any {
		return this.stacks[this.indexes[stackIndex]];
	}

	isEmpty(stackIndex: number): boolean {
		return this.indexes[stackIndex] == this.indexes[stackIndex + 1];
	}
}