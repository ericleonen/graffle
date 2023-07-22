// parses formatted equation string into an Equation object

// e.g. 1+x^2*(x-4)

// 1) scan equation for lowest order operator from l to r
// 2) make new EquationNode with EquationNode.operator set to the operator
// 3) make EquationNode.left the left string and EquationNode.right the right
// 4) repeat

// e.g. -(x + ln(x))

// 1) scan equation for lowest order operator from l to r
// 2) make new EquationNode with EquationNode.operator = operator
//    2.1) is it unary? EquationNode will only have a .left
//    2.2) is it binary? EquationNode.left is calculated with left string, right, likewise

// 1+x^2*(x-4)-(x + ln(x))
// +: 1, x^2*(x-4)-(x + ln(x))

import { 
    unaryOperators, 
    binOperatorOrder, 
    binOperators, 
    hasOuterParenthesis
} from './utils';
import {
    hasEmptyParentheses,
    hasMatchingParentheses
} from './valid.js';
import { formatEquation } from './format.js';

class Equation {

    invalid = false;

    constructor(equation) {
        const equationStr = typeof equation === 'string' ? equation : formatEquation(equation);

        if (hasEmptyParentheses(equationStr) || !hasMatchingParentheses(equationStr)) {
            this.root = null;
        }
        else
            this.root = this.parse(equationStr);
    }

    parse(equationStr) {
        // console.log(equationStr);

        if (equationStr.length === 0) {
            this.invalid = true;
            return null;
        }

        // trim off outer parenthesis
        let wrapped = false;

        if (hasOuterParenthesis) {
            wrapped = true;
            
            while (hasOuterParenthesis(equationStr))
                equationStr = equationStr.substring(1, equationStr.length - 1);
        }
        // the next operator cannot be inside a parenthesis

        // scan for a lowest-order binary operator
        let lowBinOperator = null;
        let lowBinPos = 0;

        for (let c = 0; c < equationStr.length; c++) {
            if (equationStr.charAt(c) === '(')
                while (equationStr.charAt(c) !== ')')
                    c++;

            if (c > 0 && Object.keys(binOperators).includes(equationStr.charAt(c))) {
                const currOperator = equationStr.charAt(c);

                if (lowBinOperator === null || binOperatorOrder[currOperator] < binOperatorOrder[lowBinOperator]) {
                    lowBinOperator = currOperator;
                    lowBinPos = c;
                }
            }
        }

        if (lowBinOperator !== null)
            return new EquationNode(
                lowBinOperator,
                this.parse(equationStr.substring(0, lowBinPos)),
                this.parse(equationStr.substring(lowBinPos + 1)),
            );

        // if the first operator is unary, proceed
        for (let unaryOperator of Object.keys(unaryOperators))
            if (equationStr.indexOf(unaryOperator) === 0)
                return new EquationNode(
                    unaryOperator, 
                    this.parse(equationStr.substring(unaryOperator.length))
                );

        // check for remaining operators (that's an error)
        for (let operator of Object.keys(unaryOperators).concat(Object.keys(binOperators)))
            if (equationStr.includes(operator)) {
                // handle errors?
                this.invalid = true;
                return null;
            }
        
        if (equationStr.match(/[a-zA-Z]/g) && !['x', 'e'].includes(equationStr)) {
            this.invalid = true;
            return null;
        }

        return new Operand(equationStr);
    }

    eval(x) {
        if (this.invalid)
            console.log('Cannot evaluate an invalid equation!');
        else if (this.root)
            return this.root.eval(x);
    }
}

class Operand {
    constructor(val) {
        this.val = val;
    }

    eval(x) {
        if (this.val === 'x') return x;
        else if (this.val === 'e') return Math.E;
        else if (this.val === 'π') return Math.PI;
        return parseFloat(this.val)
    }
}

class EquationNode {
    constructor(operator, left, right = undefined) {
        this.operator = operator;
        this.left = left;
        this.right = right;
        this.isUnary = right === undefined;
    }

    eval(x) {
        
        // unary? eval this.left and apply operator
        if (this.isUnary)
            return unaryOperators[this.operator](this.left.eval(x));


        // binary? eval both sides and apply operator
        else
            return binOperators[this.operator](this.left.eval(x), this.right.eval(x));
    }
}

export const createEquation = equationStr => new Equation(equationStr);