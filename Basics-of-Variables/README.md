# Declaring a Variable
1. <span style="color:#fff"> [Declaring with the var keyword](#varKey) </span>
1. <span style="color:#fff"> [Declaring with the let keyword](#varKey) </span>
1. <span style="color:#fff"> [Declaring with the const keyword](#varKey) </span>
1. <span style="color:#fff"> [What about type?](#varKey) </span>



## 1. <a name="varKey"> <span style="color:#fff">Declaring with the `var` keyword
</span></a>
---
- One issue with `var`  is that of a variable makes it unpredictable.
- Variable declared using `var` is function-scoped when declared inside of function, but global-scoped when declared outside function.
- we can redeclare the `var` and it overrides the initial declaration or initialization.

>function varFunction() { <br>
>  var x = "10000"; <br>
 > if (true) { <br>
  >  var x = "99999"; // variable `x` is redefined <br>
  >} <br>
  >console.log(x); <br>
>}
><br>
> varFunction(); <br>
### Output:

```999```

- As seen in the example, because the variable `x`
 is outside the closure of the if statement, the new declaration redefines `x` (line 4) and overrides the initial declaration (line 2).
- However, the new definition is contained within the scope of the function,  for example, trying to output `x` from outside the function will return `undefined`.

>var x; <br>
>function varFunctionGlobal() { <br>
 > var x = "111"; <br>
  >if (true) { <br>
   > var x = "999"; <br>
  >} <br>
  >console.log(x); <br>
>} <br>
><br>
>varFunctionGlobal(); <br>
>console.log(x); <br>
  ### Output:

  ```999``` <br>
  ```undefined```

- It is important to note that not declaring the variable `x` would result in TypeScript signaling that `cannot find name x`.  However, if TypeScript is not `strict: true`, the code will signal an error but will generate the javaScript, run, and display undefined.

## 2.  <a name="varKey"> <span style="color:#fff">Declaring with the `let` keyword
</span></a>
 - `let` allows you to declare variables that are limited to the scope of block statement, or expression on which it is used, unlike the `var` keyword which declares a variable globally, or locally to an entire function regardless of block scope.

>if(true) let a = 1;   <span style="color:red">//SyntaxError: lexical declaration cannot appear in a single-element context`</span>

### Example:
---
- if you declare variable with `let` within an `if` statement, the variable will not be accessible as soon as the execution leaves the `if`. This rule is true for a function, a loop, and you define the iterative `i`, this one should use `let` which allows modifying its values while being only available for the loop.


> function letFunction() {<br>
>  let x = "Let fn";<br>
 > if (true) {<br>
  >  let x = "let fnx";<br>
  > }<br>
   > console.log(x);<br>
> }<br>
> <br>
> letFunction();

### Output:

```Let fn```

### There are two things to note when let compared with var in this example:
 - Though the output is expected to be one defined in the scope, it means the value  `let fnx` remains in the scope of condition, and the value `let fn` is available only in the scope of the function
 - Second, since they are two separated values, both `x`s can be of different types. At the moment, we are not explicity mentioning the type. However, TypeScript will determine that the former `x` is a `string` while the latter is a `number`.

