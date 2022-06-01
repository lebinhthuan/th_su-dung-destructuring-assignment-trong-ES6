
let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);//"alpha"
console.log(secondName);//"beta"

//After swapping
[firstName, secondName] = [secondName, firstName]

console.log(firstName);//"beta"
console.log(secondName);//"alpha"