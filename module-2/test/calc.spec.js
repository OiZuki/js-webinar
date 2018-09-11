'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    describe("Smoke test", () => {
        it("of output", () => {
            expect(calc(3).v).equals(3);
        });

        it("of adding", () => {
            expect(calc(3).add(5).v).equals(8);
        });

        it("of subtracting", () => {
            expect(calc(3).minus(2).v).equals(1);
        });

        it("of sqrt", () => {
            expect(calc(4).sqrt().v).equals(2);
        });

        it("of times", () => {
            expect(calc(3).times(10).v).equals(30);
        });

        it("of division", () => {
            expect(calc(10).divide(2).v).equals(5);
        });

        it("of modulo", () => {
            expect(calc(10).modulo(5).v).equals(0);
        });

        it("of chaining", () => {
            expect(calc(3).add(4)
                .minus(3)
                .times(6)
                .v).equals(24);
        });
    });

    describe("Negative test", () => {
        it("of dividing by zero", () => {
            expect(() => calc(5).divide(0)).to.throw;
        });

        it("of sqrt of negative value", () => {
            expect(() => calc(-3).sqrt()).to.throw;
        });
    });
});