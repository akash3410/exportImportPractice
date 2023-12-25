// import arr, { a, str, obj, someText } from './component.js';
import * as all from './component.js';
import arr from './component.js';
import cngAppFromApp from './other.js';
// console.log(a);
// console.log(str);
// console.log(obj);
// console.log(obj.age);
// let newText = new someText("Hello World");
// console.log(newText);
// console.log(newText.text);
// let fun = (newText.printSomething());
// console.log(fun);
// console.log(arr);


console.log(all.a);
console.log(all.str);
console.log(all.obj);
console.log(all.obj.age);
let newText = new all.someText("Hello World");
console.log(newText);
console.log(newText.text);
let fun = (newText.printSomething());
console.log(fun);
// console.log(all.arr); default export can't import in * import
console.log(arr);


let newApp = new cngAppFromApp("Some random text!");
console.log(newApp);