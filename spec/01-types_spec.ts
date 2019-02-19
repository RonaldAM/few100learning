describe('variables and constants and stuff', () => {
    describe('declaring variables', () => {
        it('using let to create a binding', () => {
            let name;
            name = 'joe';
            expect(name).toBe('joe');

            name = 11;
            expect(name).toBe(11);
        });

        it('some typescript stuff for variables', () => {
            //let name: any = 'joe';
            let name: string | number = 'joe';
            name = 'joe';
            expect(name).toBe('joe');

            name = 11;
            expect(name).toBe(11);
        });

        it('declaring constants', () => {
            const PI = 3.1415927;

            const FAVORITE_NUMBERS = [9, 22, 109];
            FAVORITE_NUMBERS[0] = 10;

            const MOVIE = {
                title: 'The Force Awakens',
                director: 'Abrams, JJ'
            };

            MOVIE.director = 'Johnson';
        });
        it('var is still there but it stinks and should not be used', () => {
            if (true) {
                var name = 'Fido'; //this is the thing you should not do.
            }
            expect(name).toBe('Fido');
        });
    });

    describe('strings', () => {
        it('delimiting', () => {
            let first = 'Joe',
                last = "Schmidt";
            expect("Joe").toBe(first);

            let fullname = `This is ${last}, ${first}`;
            expect(fullname).toBe(`This is Schmidt, Joe`);
        });

    });
});