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
    const a = 10;
    console.log(a);
    console.log(e);
}
console.log(a);
console.log(e);

for (let i = 0; i < 10; i++) {
    const b = 10;
    const a = 10;
}

function sumalosTodos(primero, ...todos) {
    if (primero < 10) return console.error("NO!!!")

    // let suma = 0;

    // for (const e of todos) {
    //     suma += e;
    // }

    // return suma;

    return todos.reduce((acc, a) => acc + a, 0) + primero;

}


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



const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (elem) {
    console.log(this);
})
arr.forEach((elem) => {
    console.log(this);
})



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