var arg = process.argv

var numbOne = parseFloat(arg[2]);
var numbTwo = parseFloat(arg[3]);

if (numbOne === numbTwo) {
	console.log(true);
}
else {
	console.log(false);
}

if (!(numbOne%7))