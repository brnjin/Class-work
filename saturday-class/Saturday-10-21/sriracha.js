var argument = process.argv;
console.log(argument[2] + argument[3]);

//Regular if/else statement
if (argument[2] === argument[3]) {
	console.log("true");
}
else {
	console.log("false");
}

//uses ?, short hand for if/else statements
var isEqual = argument[2] === argument[3] ? "arguments are equal" : "arguments are false";

console.log(isEqual);

//This gives just the boolgean 
var isEqual = argument[2] === argument[3];

console.log(isEqual);
