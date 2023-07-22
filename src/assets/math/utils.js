export const unaryOperators = {
    '-': (n) => -n,
    'sin': (n) => Math.sin(n),
    'cos': (n) => Math.cos(n),
    'tan': (n) => Math.tan(n),
    'ln': (n) => Math.log(n),
    'abs': (n) => Math.abs(n)
};

export const binOperatorOrder = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1,
    '^': 2
};

export const binOperators = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
    '*': (n1, n2) => n1 * n2,
    '/': (n1, n2) => n1 / n2,
    '^': (n1, n2) => n1 ** n2
};

export const hasOuterParenthesis = equationStr => {
    if (equationStr.length === 0 || equationStr.charAt(0) !== '(')
        return false;

    const stack = ['('];

    for (let c = 1; c < equationStr.length - 1; c++) {
        const currChar = equationStr.charAt(c);

        if (stack.length === 0) return false;
        else if (currChar === ')' && stack[stack.length - 1] === '(')
            stack.pop();
        else if (currChar === '(')
            stack.push(currChar);
    }

    return stack.length > 0;
};