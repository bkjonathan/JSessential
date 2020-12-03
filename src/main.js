function myFunc(name) {
  let myLocalVar = "sunny";
  let innerFunction = ()=> ("Hello" + name + ". Today is " + myLocalVar + ".");
  return innerFunction();
}
console.log(myFunc(" Adam"));
