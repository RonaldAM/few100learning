describe('destructuring', () => {
    it('destructuring arrays', () => {
        const friends = ['sean', 'billy', 'david', 'sarah', 'mo'];

        const f1 = friends[0];
        const f2 = friends[1];
        expect(f1).toBe('sean');
        expect(f2).toBe('billy');

        const [d1, d2] = friends;
        expect(d1).toBe('sean');
        expect(d2).toBe('billy');

        const [e1, , e2, ...rest] = friends;
        expect(e1).toBe('sean');
        expect(e2).toBe('david');
        expect(rest).toEqual(['sarah', 'mo']);
    });

    it('destructuring objects', () => {
        const friends = {
            number1: 'sean',
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        };

        const { number1, number2 } = friends;
        expect(number1).toBe('sean');
        expect(number2).toBe('billy');

        const { number4: f1, number5: f2 } = friends;
        expect(f1).toBe('sarah');
        expect(f2).toBe('mo');

        const { number1: n1, ...other } = friends;
        expect(n1).toBe('sean');
        expect(other).toEqual({
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        })


    });

    describe('array methods', () => {

    });
});