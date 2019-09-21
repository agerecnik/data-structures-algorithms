//https://leetcode.com/problems/house-robber/
/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

const houses1 = [1,2,3,1];
const houses2 = [2,7,9,100,1]

function houseRobber(array) {
	let cache = {}; //Cache for storing calculated results, so we can speed up the process (time complexity is O(n)).
	let i = 0;
	function maxMoney(array, i) { //There are two available options: either the robber robs the current house and one after the next one (i+2) or he doesn't rob the current house and robs the next one (i+1).
		if (i > array.length - 1) { //If index gets higher than array's length we are done and return 0, because adding 0 doesn't change the sum.
		return 0;
		}
		if (cache[i]) { //Checking if a certain result exists in cache and returning it instead of calculating it again.
			return cache[i];
		}
		cache[i] = Math.max(maxMoney(array, i + 1), maxMoney(array, i + 2) + array[i]); //Here we compare which of these two options yields more money.
		return cache[i];
	}
	return maxMoney(array, i);
}

houseRobber(houses2);