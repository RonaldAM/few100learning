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

    describe('various literals', () => {
        it('examples', () => {
            let n1 = 12;
            let n2 = 1.3
            let n3 = 0xff;   // still a number
            let n4 = 0b00101; // still a number
            let n5 = 0o744;
            // typescript thing
            const salart = 1_000_000;
        });
    });

    describe('arrays and array literals', () => {
        it('has them', () => {
            const stuff: Array<number | string> = [12, 14];
            stuff[2] = 'tacos';

            expect(stuff[2]).toBe('tacos');

            let food = stuff[2];
        });

        describe('tuples', () => {
            it('a brief introduction TS', () => {
                let warren: [string, string, number, string];
                warren = ['Warren', 'Ellis', 55, 'musician'];

                let occupation = warren[3];
                let age = warren[2];
            });
            it('an example', () => {

                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }
                const [fullName, len] = formatName('Han', 'Solo'); // destructuring
                expect(fullName).toBe('Solo, Han');
                expect(len).toBe(9);


                const stuff = ['Jeff', 'Gonzalez', 49];
                const [firstName, , age] = stuff;
                expect(firstName).toBe('Jeff');
                expect(age).toBe(49);
            });
        });
    });
});

