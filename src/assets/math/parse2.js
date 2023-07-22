/**
new parse deals directly with an array of "parts"
to make it possible that "2x" may be read as a valid equation
specific syntactical errors are accounted for
domains, asymptotes are respected

e.g. 10+x^2(x-4)

stored natively as:
['1', '0', '+', 'x', '^', '2', '(', 'x', '-', '4', ')']

1) classify each part as:
    - digit: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    - constant: π or e
    - binary operator: +, -, ×, ÷, ^
    - unary operator: - (depends), sin, cos, tan, ln
    - absolute value bar: |
    - opening/closing parenthesis: ( or )
2) merge & simplify
    - merge digits that are next to each other
3) annotate
    - turn || into abs()
    - add × between adjacent parts when needed
4) parse
*/

export class Expression {

    invalid = false;
    errorMessage = '';

    static digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    static constantsDict = {
        'π': Math.PI,
        'e': Math.E
    };
    static constants = Object.keys(this.constantsDict);

    static unaryOpsDict = {
        '-': (n) => -n,
        'sin': (n) => Math.sin(n),
        'cos': (n) => Math.cos(n),
        'tan': (n) => Math.tan(n),
        'ln': (n) => Math.log(n),
        'abs': (n) => Math.abs(n)
    };
    static unaryOps = Object.keys(this.unaryOpsDict);

    static binaryOpsDict = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '^': (a, b) => Math.pow(a, b)
    };
    static binaryOps = Object.keys(this.binaryOpsDict);
    static binaryOpsOrder = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    }

    constructor(expressionArr) {
        if (expressionArr.length === 0) {
            this.invalid = true;
            this.errorMessage = "Expression is empty"

            return;
        }

        this.expressionArr = this.classifyParts(expressionArr);
        this.expressionArr = this.mergeNumbers(this.expressionArr);
        this.origExpression = this.expressionArr;
        this.expressionArr = this.handleImplicitMultiplication(this.expressionArr);

        this.root = this.parse(this.expressionArr);
    }

    static toString(expressionArr) {
        return expressionArr.map(({value}) => value).join('');
    }

    static stringToArr(expressionStr) {
        for (let unaryOp of Expression.unaryOps) {
            if (expressionStr.indexOf(unaryOp) === 0) {
                return [
                    unaryOp, 
                    ...this.stringToArr(expressionStr.substring(unaryOp.length))
                ];
            }
        }

        if (expressionStr.length === 1) return [expressionStr];
        return [expressionStr.charAt(0), ...this.stringToArr(expressionStr.substring(1))];
    }

    classifyPart(part) {
        if (Expression.digits.includes(part))
            return 'number';
        else if (Expression.constants.includes(part))
            return 'constant';
        else if (Expression.binaryOps.includes(part))
            return 'binary operator';
        else if (Expression.unaryOps.includes(part))
            return 'unary operator';
        else if (part === '(' || part === ')')
            return 'parenthesis';
        else if (part === 'x')
            return 'variable';
        else {
            this.invalid = true;
            this.errorMessage = 'Invalid symbol: ' + part;
        }
    };

    classifyParts(expressionArr) {
        return expressionArr.map((part) => ({
                value: part,
                type: this.classifyPart(part)
            })
        );
    };

    mergeNumbers(expressionArr) {
        const newExpressionArr = [];

        expressionArr.forEach((part, i) => {
            if (part.type === 'number' && i > 0 && expressionArr[i - 1].type === 'number')
                newExpressionArr[newExpressionArr.length - 1].value += part.value;
            else
                newExpressionArr.push(part);
        });

        return newExpressionArr;
    }

    handleImplicitMultiplication(expressionArr) {
        // (constant || number || variable || ')') and !(binaryOp || ')')
        const newExpressionArr = [];
        
        expressionArr.forEach((part, i) => {
            newExpressionArr.push(part);

            if (i === expressionArr.length - 1) return;

            if (
                (['constant', 'number', 'variable'].includes(part.type) ||
                part.value === ')') &&
                !(expressionArr[i + 1].type === 'binary operator') &&
                expressionArr[i + 1].value !== ')'
            )
                newExpressionArr.push({
                    value: '*',
                    type: 'binary operator'
                });
        });

        return newExpressionArr;
    }

    parse(expressionArr) {
        return new ExpressionNode(expressionArr);
    }

    eval(x) {
        if (this.invalid) return;

        const result = this.root.eval(x);

        if (typeof result === 'number') return result;
        else {
            this.invalid = true;
            this.errorMessage = result;
        }
    }

    check() {
        this.eval(0);
        return !this.invalid;
    }
}

class ExpressionNode {
    invalid = false;
    errorMessage = '';
    left = null;
    right = null;
    operator = null;
    type = null;

    constructor(expressionArr) {
        if (expressionArr.length === 0) {
            this.invalid = true;
            this.errorMessage = "Operator doesn't have (enough) operands";

            return;
        }

        expressionArr = this.unwrapAndValidateParentheses(expressionArr);

        if (expressionArr === null) return;
        else if (expressionArr.length === 0) {
            this.invalid = true;
            this.errorMessage = 'Empty parentheses';
            return;
        }
        if (expressionArr[0].value === '-') expressionArr[0].type = 'unary operator';
        
        if (this.splitOnBinaryOp(expressionArr)) return;
        if (this.splitOnUnaryOp(expressionArr)) return;
        if (this.handleOperand(expressionArr)) return;

        else {
            this.invalid = true;
            this.errorMessage = 'Bad expression';
        }
    }

    unwrapAndValidateParentheses(expressionArr) {
        let canUnwrap = expressionArr[0].value === '(';
        let openCount = 0;

        let flag = false;

        expressionArr.forEach((part, i) => {
            if (part.value === '(')
                openCount++;
            else if (part.value === ')') {
                openCount--;

                if (openCount < 0) {
                    this.invalid = true;
                    this.errorMessage = "Parentheses don't match";
                    flag = true;
                }
                else if (openCount === 0) {
                    if (i < expressionArr.length - 1)
                        canUnwrap = false;
                }
            }
        });

        if (flag || openCount !== 0) {
            this.invalid = true;
            this.errorMessage = "Parentheses don't match";
            return null;
        }

        if (canUnwrap)
            return expressionArr.slice(1, -1);
        else
            return expressionArr;
    }

    splitOnBinaryOp(expressionArr) {
        let openParenthesis = 0;
        let minOrder = 0;
        let binarySplitIndex = 0;

        expressionArr.forEach((part, i) => {
            if (part.value === '(') openParenthesis++;
            else if (part.value === ')') openParenthesis--;

            if (openParenthesis === 0 && part.type === 'binary operator') {
                if (minOrder === 0 || Expression.binaryOpsOrder[part.value] <= minOrder) {
                    minOrder = Expression.binaryOpsOrder[part.value];
                    binarySplitIndex = i;
                }
            }
        });

        if (minOrder === 0) return false;

        this.operator = expressionArr[binarySplitIndex].value;
        this.left = new ExpressionNode(expressionArr.slice(0, binarySplitIndex));
        this.right = new ExpressionNode(expressionArr.slice(binarySplitIndex + 1));
        this.type = 'binary operator';

        return true;
    }

    splitOnUnaryOp(expressionArr) {
        if (expressionArr[0].type === 'unary operator') {
            this.operator = expressionArr[0].value;
            this.left = new ExpressionNode(expressionArr.slice(1));
            this.type = 'unary operator';

            return true;
        }
        else return false;
    }

    handleOperand(expressionArr) {
        if (expressionArr.length === 1 && ['number', 'constant', 'variable'].includes(expressionArr[0].type)) {
            this.left = expressionArr[0].value;
            this.type = expressionArr[0].type;

            return true;
        }
        else return false;
    }

    eval(x) {
        if (this.invalid) {
            return this.errorMessage;
        }
        else if (this.type === 'binary operator') {
            const left = this.left.eval(x);
            const right = this.right.eval(x);

            if (this.left.invalid) {
                this.invalid = true;
                return left;
            }
            else if (this.right.invalid) {
                this.invalid = true;
                return right;
            }

            return Expression.binaryOpsDict[this.operator](
                left,
                right
            );
        }
        else if (this.type === 'unary operator') {
            const left = this.left.eval(x);
            
            if (this.left.invalid) {
                this.invalid = true;
                return left;
            }

            return Expression.unaryOpsDict[this.operator](
                left
            );
        }
        else if (this.type === 'number') {
            return parseInt(this.left);
        }
        else if (this.type === 'constant') {
            return Expression.constantsDict[this.left];
        }
        else if (this.type === 'variable') {
            return x;
        }
    }
}

