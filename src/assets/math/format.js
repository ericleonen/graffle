// format an equation string into a standard format by
// - removing all spaces
// - replacing brackets with parentheses
// - replace | and | with abs()
// - replace n||, n(), ne, nπ, nsin(), ncos(), ntan(), nln() (and reverse) with _*_
import { binOperators } from './utils';

export const formatEquation = equation => {
    const equationCopy = equation.slice();

    for (let [left, right] of findMatchingAbsPairs(equationCopy)) {
        equationCopy[left] = 'abs(';
        equationCopy[right] = ')';
    }

    return equationCopy.join('');
};

export const findMatchingAbsPairs = equation => {
    const pairs = [];
    
    const openings = [];
    const closings = [];

    for (let i = 0; i < equation.length; i++) {
        if (equation[i] === '|') {
            if (i === 0 || Object.keys(binOperators).includes(equation[i - 1]))
                openings.push(i);
            else if (equation[i - 1] === '|') {
                if (openings.includes(i - 1)) openings.push(i);
                else closings.push(i);
            }
            else
                closings.push(i);
        }
    }

    const stack = [];

    while (closings.length) {
        if (openings.length && openings[0] < closings[0])
            stack.push(openings.shift());
        else
            pairs.push([stack.pop(), closings.shift()]);
    }

    return pairs;
};