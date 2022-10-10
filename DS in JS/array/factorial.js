// recursion
const factorial = n => {
	if (n === 1) {
		return 1;
	}
    console.warn(n)
	return n * factorial(n - 1);
};

// loop
const loopFactorial = n => {
    let fact = 1;
    for(let i=n;i>1;i--){
        console.warn(i);
        fact *= i;
    }
    return fact;
}

console.log(loopFactorial(5));