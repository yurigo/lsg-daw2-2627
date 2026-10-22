// Function declarations are available throughout their scope; these calls use
// explicit arguments to show default parameters and a rest parameter.
// const x = suma(3);
// const x = suma(3, 10);
const x = suma(3, 10, 12, 45, 12);
const st = sumalosTodos(100, 10, 12, 45, 12);
console.log(x, st);


const a = 1000;
let e = 2.71
// var e = 100;
// var e = 200;
{
    // This block-local a shadows, but does not replace, the outer const a.
    const a = 10;
    console.log(a);
    console.log(e);
}
console.log(a);
console.log(e);

for (let i = 0; i < 10; i++) {
    // i and these const bindings are limited to their respective blocks.
    const b = 10;
    const a = 10;
}

// The first argument is checked separately; ...todos collects the rest in an array.
function sumalosTodos(primero, ...todos) {
    if (primero < 10) return console.error("NO!!!")

    // let suma = 0;

    // for (const e of todos) {
    //     suma += e;
    // }

    // return suma;

    return todos.reduce((acc, a) => acc + a, 0) + primero;

}


// A default is used only when the caller omits b or passes undefined.
function suma(a, b = 10_000) {
    return a + b;
}

const resta = function (a, b) {
    return a - b;
}

const multiplicacion = (a, b) => {
    return a * b;
}

const division = (a, b) => a / b;


const y = resta(3, 5);
console.log(y);

const z = multiplicacion(3, 5);
console.log(z);



// Both callbacks are invoked once per array item. In an ES module, top-level
// this is undefined; the arrow callback captures that lexical value.
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (elem) {
    console.log(this);
})
arr.forEach((elem) => {
    console.log(this);
})



// operation closes over a and b, which are initialized before it is called.
const operate = () => {
    // This function is defined inside the operate
    // function, so it can access to the operate variables.

    const operation = () => {
        return a + b;
    };
    let a = 2;
    let b = 3;
    return operation();
}
console.log(`Result: ${operate()}`);