# Declaring a Variable
1. Declaring with the var keyword
2. Declaring with the let keyword
3. Declaring with the const keyword
4. What about type?

## 1. Declaring with the var keyword
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
>}
  ### Output:

  ```999``` <br>
  ```undefined```

- It is important to note that not declaring the variable `x` would result in TypeScript signaling that `cannot find name x`.  However, if TypeScript is not `strict: true`, the code will signal an error but will generate the javaScript, run, and display undefined.

## 2. Declaring with the let keyword
---
