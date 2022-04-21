// 1. Create one function with zero parameter having a console statement;

function add() {
    console.log(3+5);
}
add();


// 2. Create one function which takes two values as a parameter 
// and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b) {
    console.log(`Sum of ${a}, ${b} is ${a+b}`);
}
sum(3,4);

// 3. Create one arrow function

()=> {
    console.log("this is an arrow function");
}


// 4. "Print output: 

var x = 21;
var girl = function() {
    var x = 20;
    console.log(x);
    var x = 20;
}
girl();


// 5. "Print output: 

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
}

// 6. "Print output

var x = 21;

let a = function() {
    x = 20;
  console.log(x);
};
let b = function() {
    x = 40;
   console.log(x);
}
a();
b();


// 7. Write a function that accepts parameter n and returns factorial of n

let f = 1;
let n;
function fact(n) {
    for(i=1; i<=n; i++){
        f = f * i;
    }
}
fact(4);
console.log(`The factorial of ${n} is ${f}`);
















