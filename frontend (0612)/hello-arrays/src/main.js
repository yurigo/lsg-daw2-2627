import './style.css'
import trollface from './assets/trollface.webp'

// This ordered array is the shared input for the method demonstrations below.
const a = [1, 5, 2, 8, 3, 9, 4, 0, 6, 7];

console.log(a);

// These additions demonstrate that console is an object with extensible properties.
console.algo = 7;
console.println = (msg) => console.log("****" + msg + "****");

console.println("hola!" + console.algo);

// The %c directive applies the following CSS to this browser-console message.
console.success = (message) => {
  console.log('%c' + message, 'background: #73ff00; color: #2eae20');
}

// includes checks for a value; some/every test whether callback conditions hold.
console.log("incluye 3?", a.includes(3));
console.log("alguno > 2?", a.some((a) => a > 2));
console.log("alguno > 100?", a.some((a) => a > 100));
console.log("todos son > 8?", a.every((a) => a > 8));
console.log("todos son > -1?", a.every((a) => a > -1));

// map transforms each item into a new object without changing the source array.
console.success("map!");
// const b = a.map((elem) => { 
//   return { original: elem, valor: Math.PI ** elem }
// });
const b = a.map((elem) => ({ original: elem, valor: Math.PI ** elem }));

console.log("original", a);
console.log("map", b);

// reduce combines all numbers into one sum; the initial accumulator is 0.
console.success("reduce");
const c = a.reduce((acc, elem) => acc + elem, 0);
console.log("reduce", c);

// find returns the first matching element, not the largest matching element.
console.success("find");
const eBiggerThan6 = a.find((e) => e > 6);
console.log("found bigger than 6", eBiggerThan6);


// toSorted and toReversed return copies; the comparator sorts numbers descending.
console.log("sorted", a.toSorted());
console.log("sorted", a.toSorted((a, b) => b - a));
console.log("reversed", a.toReversed());

// forEach supplies each value, its index, and the original array to the callback.
a.forEach((e, i, arr) => console.log(`El numero en ${i} es ${e} dentro de ${arr}`))

console.log(a);


// Object literal syntax associates property names with values.
console.success("Literal object")
const user = {
  id: 1,
  name: "paco",
  lastName: "paquito",
  adress: "poco paquete"
}
console.table(user);
console.log(user);

const id = 300;

// Destructuring reads named properties; id is renamed to avoid the outer id binding.
console.success("destructuring")
const { id: userid, adress } = user;
console.log(`id: ${userid}, adress: ${adress}`);


// Array literal syntax creates an ordered collection with numeric indexes.
console.success("Literal array")

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);


// Array destructuring binds selected positions; ...rest gathers remaining items.
console.success("destructuring")
// const [primero, segundo, tercero, ...rest] = arr;
const [_, segundo, ___, ...rest] = arr;

console.log(`El segundo elemento es: ${segundo} y el resto quedaría en ${rest}`);
console.log(rest);

console.warn("hola")
console.error("hola")


