//https://leetcode.com/problems/climbing-stairs/
/*
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.
*/

//This is actually a fibonacci sequence which is a bit modified at the first few indexes.
function climbStairs(n) {
	let cache = {};
	return function climbStairsRecursion(n) {
		if (n in cache) {
			return cache[n];
		} else {
			if (n < 0) {
				return 0;
			}
			else if (n === 0) {
				return 1;
			}
			else {
				cache[n] = climbStairsRecursion(n - 1) + climbStairsRecursion(n - 2);
				return cache[n];
			}
		}
	}
}

const climb = climbStairs();
climb(5);