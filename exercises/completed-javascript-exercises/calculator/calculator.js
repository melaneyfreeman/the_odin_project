function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	//0 gives default value
	return arr.reduce((total, current) => total + current, 0);
}

function multiply (arr) {
	return arr.length ? arr.reduce((total, num) => total * num) : 0;
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	if(num < 0){
		return -1;
	}
	else if(num == 0){
		return 1;
	}
	else{
		return (num * factorial(num-1));
	}
}

add(2,6);

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}