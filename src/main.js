//
// function myFunc(name, weather, ...extraArgs) {
//   console.log("Hello " + name + ".");
//   console.log("It is " + weather + " today.");
//   for (let i = 0; i < extraArgs.length; i++) {
//     console.log("Extra Arg:" + extraArgs[i]);
//   }
// }
// myFunc("Adam", "sunny", "one", "two", "three","four");

// function myFunc(name) {
//   return ("Hello " + name + ".");
// }
//
// console.log(myFunc("Adam"));

// function myFunc(nameFunction) {
//   return "Hello " + nameFunction() + ".";
// }
// console.log(
//   myFunc(function() {
//     return "Adam";
//   })
// );

// function myFunc(nameFunction) {
//   return "Hello" + nameFunction() + ".";
// }
// function printName(nameFunction, printFunction) {
//   printFunction(myFunc(nameFunction));
// }
// printName(function() {
//   return " Adam";
// }, console.log);

const myFunc = (nameFunction) => ("Hello" + nameFunction() + ".");
const printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction));
printName(function () { return "Adam" }, console.log);

