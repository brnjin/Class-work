var arg = process.argv

var numbOne = parseFloat(arg[2]);

var sumNum = 0;
for (var i = 0; i < numbOne; i += 6) {
	sumNum = i + sumNum;
}
console.log(sumNum)