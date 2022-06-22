# Declaring a Variable
1. <span style="color:#fff"> [Declaring with the var](#varKey) </span>
2. <span style="color:#fff"> [Declaring with the let](#letKey) </span>
3. <span style="color:#fff"> [Declaring with the const](#constKey) </span>



## 1. <a name="varKey"> <span style="color:#fff">Declaring with the `var`
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

## 2.  <a name="letKey"> <span style="color:#fff">Declaring with the `let`
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

#### There are two things to note when let compared with var in this example:
 - Though the output is expected to be one defined in the scope, it means the value  `let fnx` remains in the scope of condition, and the value `let fn` is available only in the scope of the function
 - Second, since they are two separated values, both `x`s can be of different types. At the moment, we are not explicity mentioning the type. However, TypeScript will determine that the former `x` is a `string` while the latter is a `number`.

> <span style="font-weight:bold; font-size:18px; color:#ffcc00">📜 NOTE: </span> <span style="color:	#fff;font-weight:bold; font-size:16px;">The Below code is expected to throw an error as explained.</span>❌

> function varLetFunction() { <br>
> var myStringValue = "Hello Var"; <br>
> let myStringValueLet = "hello Let"; <br>
> if(true) { <br>
> var myStringValue = 123; <br>
> let myStringValueLet = 12345; <br>
> }<br>
> } <br>
> varLetFunction(); <br>

### Output:
 - The code above doesn't compile because of the `var` variable. The error that is thrown is:

 > ```error TS2403: Subsequent variable declarations must have the same type.  Variable 'myStringValue' must be of type 'string', but here has type 'number'.```

 - As you can see, `var` brings confusion that TypeScript can handle by providing guidance. As a rule of thumb, `var` is never used since the adoption of `let` and `const` provides cleaner scopes definition.

## 3. <a name="constKey"> <span style="color:#fff">Declaring with the `const`
</span></a>

---
- The keyword `const` (constant) is similar to `let` in terms of the scope of its lifespan. However, it can only be initialized once: in its **declaration**. The restriction is powerful because it not only syntactically indicates that the purpose is not to change its value, but Typescript will ensure that no value can be set. It's important to understand that if you have a **constant object**, the value of that object cannot change.

> <span style="font-weight:bold; font-size:18px; color:#ffcc00">📜 NOTE: </span> <span style="color:	#fff;font-weight:bold; font-size:16px;"> The below code is expected to throw an error as explained. </span>❌

> const x = "Hello World"; <br>
> x = "This won't compile"; <br>
> console.log(x); <br>

### Output:

> TSError: ⨯ Unable to compile TypeScript:
> index.ts(2,1): error TS2588: Cannot assign to > 'x' because it is a constant.

- The assignation to members of the constant variable is authorized. For example, say you declare and initialize a variable that holds the current `user` of your application to a constant. You won't be able to assign the current `user` to any other user. The following code demonstrates that `user2` cannot be assigned to `user1`.

> <span style="font-weight:bold; font-size:18px; color:#ffcc00">📜 NOTE: </span> <span style="color:	#fff;font-weight:bold; font-size:16px;"> The below code is expected to throw an error as explained. </span>❌

> const user1 = { id: 1, name: "John" }; <br>
> const user2 = { id: 2, name: "Jane" }; <br>
> user1 = user2; //cannot assign a constant<br>

- However, you can set its name if public member is available.

> const user1 = { id: 1, name: "John" }; <br>
> const user2 = { id: 2, name: "Jane" }; <br>
> user1.name = user2.name; //legit<br>
> user1.id = 100; //legit<br>

- While developing, you will be very surprised that most variables can be constant. It gives more protection to direct assignment.
  > function constFunction() { <br>
  const myList = [1, 2, 3]; <br>
  myList.push(4); <br>
  console.log(myList); <br>
  } <br>
  constFunction(); <br>

### Output:

```[1, 2, 3, 4]```



