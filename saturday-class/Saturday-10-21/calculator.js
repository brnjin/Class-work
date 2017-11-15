var arg = process.argv

var userInput = arg[2];
var numbOne = parseFloat(arg[3]);
var numbTwo = parseFloat(arg[4]);
var outputNumb;


if (arg[2] === "add") {
	outputNumb = numbOne + numbTwo;
}
else if (arg[2] === "substract"){
	outputNumb = numbOne - numbTwo;
}
else if (arg[2] === "multiply"){
	outputNumb = numbOne * numbTwo;
}
else if (arg[2] === "divide"){
	outputNumb = numbOne / numbTwo;
}
else if (arg[2] === "remainder") {
	outputNumb = numbOne % numbTwo;
}
console.log(outputNumb);



/*switch (userInput) {
	case  "add":
		console.log(numbOne + numbTwo);
		break;
	case "substract":
		console.log(numbOne - numbTwo);
		break;
	default:
		console.log('not a valid operator');
		break;
}*/