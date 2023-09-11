const m = 101;
let f = (m > 100 && m < 150)? 'halua' : 'cha';

console.log(f);

const x = 100;
const y = 100 + ''; /*just add a null string*/
console.log(y);
console.log(x);

const z = '100';
const k = +z;
console.log(k);

const isActive = true;
const a = () => console.log('true');
const b = () => console.log('false');

// isActive? a() : b(); /* if isActive is true call a else call b*/
isActive && a(); /* if left side is true right side will be executed*/
isActive || b(); /* if left side is false right side will be executed*/

const name = 'Hero';
const age = 34;
const person = {name, age}; 
console.log(person);

const person1 = { name : 'Babe' }

console.log(person1["name"]);

// const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
// const ratName = adventurer?.rat?.name;

// console.log(ratName);

let person2 =null;
console.log(person2 ? person2 : "person is null");

const numbers = [1, 2, 3, 5];

const filteredNumbers = numbers.filter( number => number>10);
console.log(filteredNumbers);

const obj = {a:1};
console.log(Object.keys(obj).length===0);