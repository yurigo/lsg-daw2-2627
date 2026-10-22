import './style.css'
import trollface from './assets/trollface.webp'

const a = [1, 5, 2, 8, 3, 9, 4, 0, 6, 7];

console.log(a);

console.algo = 7;
console.println = (msg) => console.log("****" + msg + "****");

console.println("hola!" + console.algo);

console.success = (message) => {
  console.log('%c' + message, 'background: #73ff00; color: #2eae20');
}


console.log("incluye 3?", a.includes(3));
console.log("alguno > 2?", a.some((a) => a > 2));
console.log("alguno > 100?", a.some((a) => a > 100));
console.log("todos son > 8?", a.every((a) => a > 8));
console.log("todos son > -1?", a.every((a) => a > -1));

console.success("map!");
// const b = a.map((elem) => { 
//   return { original: elem, valor: Math.PI ** elem }
// });
const b = a.map((elem) => ({ original: elem, valor: Math.PI ** elem }));

console.log("original", a);
console.log("map", b);

console.success("reduce");
const c = a.reduce((acc, elem) => acc + elem, 0);
console.log("reduce", c);

console.success("find");
const eBiggerThan6 = a.find((e) => e > 6);
console.log("found bigger than 6", eBiggerThan6);


console.log("sorted", a.toSorted());
console.log("sorted", a.toSorted((a, b) => b - a));
console.log("reversed", a.toReversed());

a.forEach((e, i, arr) => console.log(`El numero en ${i} es ${e} dentro de ${arr}`))

console.log(a);


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

console.success("destructuring")
const { id: userid, adress } = user;
console.log(`id: ${userid}, adress: ${adress}`);


// array
console.success("Literal array")

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);


console.success("destructuring")
// const [primero, segundo, tercero, ...rest] = arr;
const [_, segundo, ___, ...rest] = arr;

console.log(`El segundo elemento es: ${segundo} y el resto quedaría en ${rest}`);
console.log(rest);

console.warn("hola")
console.error("hola")



