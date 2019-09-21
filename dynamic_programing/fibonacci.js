//Comparison of number of calculations in fibonacci sequence when using plain recursion and when using dynamic programming.

let calculations1 = 0;
let calculations2 = 0;

//O(2^n)
function fibonacci(n) {
	calculations1++;
	if(n < 2) {
	return n
	}
	return fibonacci(n-1) + fibonacci(n-2);
}

//O(n) + increased space complexity
function fibonacciMemoization() {
	let cache = {};
	return function fibonacciRecursive(n) {
		calculations2++;
		if (n in cache) {
			return cache[n];
		} else {
			if (n < 2) {
				return n
			} else {
				cache[n] = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
				return cache[n];
			}
		}
	}
}

const fasterFibonacci = fibonacciMemoization();

fibonacci(30);
fasterFibonacci(30);
console.log(calculations1); //number of calculations without using memoization
console.log(calculations2) //number of calculations using memoization