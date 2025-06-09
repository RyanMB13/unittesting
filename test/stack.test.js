class Stack{
    constructor(){
        this.top = -1
        this.items = []
    }

    push(item) {
        this.top += 1;
        this.items[this.top] = item;
    }
}

describe('My Stack', () => {
    
    let stack

    beforeEach(() => {
        stack = new Stack;
    })
    
    it('is empty when created', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual([]);
    });

    it('pushes an item to the stack', () => {
        stack.push('roiryan');
        expect(stack.items).toEqual(['roiryan']);
        expect(stack.top).toBe(0);
    });
});