import { sum } from './sum';

describe('App sum', () => {
    describe('sum', () => {
        it('should return 4', () => {
            expect(sum(2, 2)).toBe(4);
        });
    });
});