/**
 *  ! Declaring a Variable
 *  *Declaring with the var keyword
 * *Declaring with the let keyword
 * *Declaring with the const keyword
 * * What about type?
 */

// !Declaring with the var keyword
/**
 *  *One issue with `var`  is that of a variable makes it unpredictable
 *  *Variable declared using `var` is function-scoped when declared inside of function, but global-scoped when declared outside function.
 * *we can redeclare the `var` and it overrides the initial declaration or initialization.
 */

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
