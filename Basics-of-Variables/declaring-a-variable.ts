// !Declaring with the var keyword

function varFunction() {
  var x = "10000";
  if (true) {
    var x = "99999"; // variable `x` is redefined
  }
  console.log(x);
}

var x;
function varFunctionGlobal() {
  var x = "111";
  if (true) {
    var x = "999";
  }
  console.log(x);
}

// varFunction();
varFunctionGlobal();

console.log(x);
/**
 * *It's important to note that to  declaring the variable x would result in typeScript id not `Strict: true`, the code will single error but will generate the javaScript, run, and display undefined.
 */

// ! Declaring let keyword

/**
 * * `let` allows you to declare variables that are limited to the scope of block statement, or expression on which it is used, unlike the `var` keyword which declares a variable globally, or locally to an entire function regardless of block scope.
 *
 *  ! if(true) let a = 1;  --> SyntaxError: lexical declaration cannot appear in a single-element context
 */

/**
 * !EXAMPLE-
 *? if you declare variable with `let` within an `if` statement, the variable will not be accessible as soon as the execution leaves the `if`. This rule is true for a function, a loop, and you define the iterative `i`, this one should use `let` which allows modifying its values while being only available for the loop.
 */

function letFunction() {
  let x = "Let fn";
  if (true) {
    let x = "let fnx";
  }
  console.log(x);
}

letFunction();

/**
 * ! There are two things to note when let compared with var in this example:
 *  * - Though the output is expected to be one defined in the scope, it means the value  `let fnx` remains in the scope of condition, and the value `let fn` is available only in the scope of the function
 * *  -  Second, since they are two separated values, both `x`s can be of different types. At the moment, we are not explicity mentioning the type. However, TypeScript will determine that the former `x` is a `string` while the latter is a `number`.
 */
