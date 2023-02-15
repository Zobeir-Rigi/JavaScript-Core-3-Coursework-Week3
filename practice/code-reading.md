# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
because the first X is global and the output of line number 7 is 1 .line 4 is on a function block and the output is 2 ;

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
in line 33 the output is 10,but line 34 the output is undefined because we cant access to Y , it is only defined in the function block.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x); // 10

console.log(x); // 9

const y = { x: 9 };  
<!-- const {x} = y ; -->

function f2(val) {
  val.x = val.x + 1;   //  10
  return val;
}

f2(y);
console.log(y); x:9
```

What will be the output of this code. Explain your answer in 50 words or less.
