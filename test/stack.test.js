describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is empty when created', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual([]);
    });
});