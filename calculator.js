// var one = document.getElementById("one")
// var two = document.getElementById("two")
// var three = document.getElementById("three")
// var four = document.getElementById("four")
// var five = document.getElementById("five")
// var six = document.getElementById("six")
// var seven = document.getElementById("seven")
// var eight = document.getElementById("eight")
// var nine = document.getElementById("nine")
// var zero = document.getElementById("zero")
// var dot = document.getElementById("dot")
// var plus = document.getElementById("plus")
// var minus = document.getElementById("minus")
// var multiply = document.getElementById("multiply")
// var divide = document.getElementById("divide")
// var percent = document.getElementById("percent")
// var Equal = document.getElementById("equal")
// var clear = document.getElementById("clear")
// var result = document.getElementById("result")
// var output = document.getElementById("output")

// function dis(val)
// {
//     result.value += val
// }
// dot.addEventListener('click',addDot)
// function addDot(){
//     result.value += '.'
// }

// percent.addEventListener('click',addPercent)
// function addPercent(){
//     result.value = '%'
// }
// Equal.addEventListener('click',solve)
//  // I/O handling 
// // function solve(){
// //     let x = result.value
    
// //     let y = calculate(x)
// //     result.value = y
// // }

// clear.addEventListener('click',doClear)
// function doClear(){
//     result.value = null
// }

// //class Calculation {
//  //   constructor() {
//         let _symbols = {};
//         defineOperator("*", multiplication, "infix",   4);
//         defineOperator("/", division,       "infix",   4);
//         defineOperator("+", last,           "prefix",  3);
//         defineOperator("-", negation,       "prefix",  3);
//         defineOperator("+", addition,       "infix",   2);
//         defineOperator("-", subtraction,    "infix",   2);
//         defineOperator("(", last,           "prefix");
//         defineOperator(")", null,                "postfix");
  
// //    }
//     // Method allowing to extend an instance with more operators and functions:
//     function defineOperator(symbol, f, notation = "func", precedence = 0, rightToLeft = false) {
//         // Store operators keyed by their symbol/name. Some symbols may represent
//         // different usages: e.g. "-" can be unary or binary, so they are also
//         // keyed by their notation (prefix, infix, postfix, func):
//         if (notation === "func") precedence = 0;
//         _symbols[symbol] = Object.assign({}, _symbols[symbol], {
//             [notation]: {
//                 symbol, f, notation, precedence, rightToLeft, 
//                 argCount: 1 + (notation === "infix")
//             },
//             symbol,
//             regSymbol: symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
//                 + (/\w$/.test(symbol) ? "\\b" : "") // add a break if it's a name 
//         });
//     }
//     function last(...a)
//     { 
//         return a[a.length-1] 
//     }
//     function negation(a){ 
//         return -a 
//     }
//     function addition(a, b)       { 
//         return a + b 
//     }
//     function subtraction(a, b)
//     { 
//         return a - b 
//     }
//     function multiplication(a, b) 
//     { 
//         return a * b 
//     }
//     function division(a, b)
//     { 
//         return a / b 
//     }
  
//     function calcula(expression) {
//         debugger
//         let match;
//         const values = [],
//             operators = [_symbols["("].prefix],
//             exec = _ => {
//                 let op = operators.pop();
//                 values.push(op.f(...[].concat(...values.splice(-op.argCount))));
//                 return op.precedence;
//             },
//             error = msg => {
//                 let notation = match ? match.index : expression.length;
//                 return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`;
//             },
//             pattern = new RegExp(
//                 // Pattern for numbers
//                 "\\d+(?:\\.\\d+)?|" 
//                 // ...and patterns for individual operators/function names
//                 + Object.values(_symbols)
//                         // longer symbols should be listed first
//                         .sort( (a, b) => b.symbol.length - a.symbol.length ) 
//                         .map( val => val.regSymbol ).join('|')
//                 + "|(\\S)", "g"
//             );
//         let afterValue = false;
//         pattern.lastIndex = 0; // Reset regular expression object
//         do {
//             match = pattern.exec(expression);
//             const [token, bad] = match || [")", undefined],
//                 notNumber = _symbols[token],
//                 notNewValue = notNumber && !notNumber.prefix && !notNumber.func,
//                 notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;
//             // Check for syntax errors:
//             if (bad || (afterValue ? notAfterValue : notNewValue)) return error("Syntax error");
//             if (afterValue) {
//                 // We either have an infix or postfix operator (they should be mutually exclusive)
//                 const curr = notNumber.postfix || notNumber.infix;
//                 do {
//                     const prev = operators[operators.length-1];
//                     if (((curr.precedence - prev.precedence) || prev.rightToLeft) > 0) break; 
//                     // Apply previous operator, since it has precedence over current one
//                 } while (exec()); // Exit loop after executing an opening parenthesis or function
//                 afterValue = curr.notation === "postfix";
//                 if (curr.symbol !== ")") {
//                     operators.push(curr);
//                     // Postfix always has precedence over any operator that follows after it
//                     if (afterValue) exec();
//                 }
//             } else if (notNumber) { // prefix operator or function
//                 operators.push(notNumber.prefix || notNumber.func);
//                 if (notNumber.func) { // Require an opening parenthesis
//                     match = pattern.exec(expression);
//                     if (!match || match[0] !== "(") return error("Function needs parentheses")
//                 }
//             } else { // number
//                 values.push(+token);
//                 afterValue = true;
//             }
//         } while (match && operators.length);
//         return operators.length ? error("Missing closing parenthesis")
//                 : match ? error("Too many closing parentheses")
//                 : values.pop() // All done!
//     }

