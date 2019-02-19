describe('writing a basic spec', () => {
    it('should be easy', () => {
        //given (arrange)
        let firstName = 'Boba',
            lastName = 'Fett';
        //when  (act)
        let fullName = lastName + ", " + firstName
        //then  (assert)
        expect(fullName).toBe('Fett, Boba');
    });



});