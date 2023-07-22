// utilities for checking if an equation string is valid

// possible syntax errors:
// - non-matching parenthesis
// - empty parenthesis or brackets
// - binary operators without or with > 1 on each side (+, -, *, /, ^)
// - unary operators without an operand or with > 1
// - values that are not operators or operands

import { unaryOperators, binOperators } from './utils';

export const hasMatchingParentheses = equationStr => {
    const stack = [];

    for (let c = 0; c < equationStr.length; c++)
        if (equationStr.charAt(c) === '(') stack.push('(');
        else if (equationStr.charAt(c) === ')')
            if (stack.length === 0) return false;
            else stack.pop();

    return stack.length === 0;
};

export const hasEmptyParentheses = equationStr => {
    return equationStr.includes('()');
};

