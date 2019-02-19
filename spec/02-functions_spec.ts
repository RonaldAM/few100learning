describe('functions', () => {
    describe('syntax for creating them', () => {
        it('declaring them', () => {
            //Named function
            function add(a: number, b: number) {
                return a + b;
            }
            expect(add(3, 3)).toBe(6);

            // anonymous functions
            // -- an anonymous function that i immediately invoke with parms()
            expect((function (a, b) { return a / b })(10, 5)).toBe(2);

            const multiply = function (a: number, b: number) { return a * b; };
            expect(multiply(3, 3)).toBe(9)

            const divide = (a: number, b: number) => a / b;
            expect(divide(10, 2)).toBe(5);
        });
    });
});