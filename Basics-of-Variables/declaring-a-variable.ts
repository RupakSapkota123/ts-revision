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

function letFunction() {
  let x = "Let fn";
  if (true) {
    let x = "let fnx";
  }
  console.log(x);
}

letFunction();

