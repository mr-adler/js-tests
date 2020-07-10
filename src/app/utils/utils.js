import _ from 'lodash';
import { sum } from './sum';

export const includesCustomSymbols = (str = '') => {
    const CUSTOM_SYMBOLS = ['%', '/', '^', '*'];

    return CUSTOM_SYMBOLS.reduce((acc, symbol) => str.indexOf(symbol) !== -1 ? symbol : acc, null);
};

export const isInRange = (num = null) => {

    if (typeof num !== 'number') {
        return null;
    }

    switch (true) {
        case num < 5:
            return 'isSmaller'
        case num === 5:
            return 'isLowerLimit'
        case num > 15:
            return 'isLarger'
        case num === 15:
            return 'isHigherLimit'
        default:
            return true
    }
};

export const checkConcat = (arr) => {
    return _.concat(arr, [1]);
};

export const getArithmeticMean = (a, b) => {
    return sum(a, b) / 2;
}