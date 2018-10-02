// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our fizzBuzzer function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should fizzBuzz properly', function() {
        const normalCases = [
            {a: 16, expected: 16},
            {a: 30, expected: 'fizz-buzz'},
            {a: 40, expected: 'buzz'},
            {a: 42, expected: 'fizz'},
            {a: 3.1415926535, expected: 3.1415926535}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        })
    });

    it('should raise error if args not numbers', function() {
        const badInputs = [
            true,
            'string',
            [5, 6, 7]
        ];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});