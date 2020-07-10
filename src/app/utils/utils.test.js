import _ from 'lodash';
import { includesCustomSymbols, isInRange, checkConcat, getArithmeticMean } from './utils';
import { sum } from './sum';

jest.mock('lodash');
jest.mock("./sum");

describe('App utils', () => {
    describe('includesCustomSymbols', () => {
        it('should return %', () => {
            expect(includesCustomSymbols('ab%ba')).toBe('%');
        });

        it('should return null', () => {
            expect(includesCustomSymbols()).toBe(null);
        });
    });

    describe('isInRange', () => {
        it('should return null', () => {
            expect(isInRange()).toBe(null);
        });

        it('should return null when not number', () => {
            expect(isInRange('lol')).toBe(null);
        });

        it('should return isSmaller', () => {
            expect(isInRange(3)).toBe('isSmaller');
        });

        it('should return isLowerLimit', () => {
            expect(isInRange(5)).toBe('isLowerLimit');
        });

        it('should return isLarger', () => {
            expect(isInRange(57)).toBe('isLarger');
        });

        it('should return isHigherLimit', () => {
            expect(isInRange(15)).toBe('isHigherLimit');
        });

        it('should return true', () => {
            expect(isInRange(14)).toBe(true);
        });
    });

    describe('checkConcat', () => {
        it('should return [0, 0]', () => {
            _.concat.mockReturnValue([0, 0]);

            expect(checkConcat([1])).toEqual([0, 0]);

            expect(_.concat).toHaveBeenCalledWith([1], [1]);
        });
    });

    describe('getArithmeticMean', () => {
        it('should called sum', () => {
            sum.mockReturnValue(6);

            expect(getArithmeticMean(8, 2)).toEqual(3);

            expect(sum).toHaveBeenCalledWith(8 ,2);
        });
    });
});