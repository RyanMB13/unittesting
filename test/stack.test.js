describe('My Stack', () => {
    it('is empty when created', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual([]);
    });
});