//The same average time complexity as merge sort --> O (n log(n))
//and better space complexity --> O (log(n)),
//but worst case scenario is O (n^2) in case of a bad choice of a pivot.
//If worried about worst case, choose another algorithm.

const numbers = [99, 44, 0, 2, 1, 5, 63, 87, 283, 4, 6];

function quickSort(array, left, right) {
	if (left < right) {
		const pi = partition(array, left, right);
		quickSort(array, left, pi - 1);
		quickSort(array, pi + 1, right);
	}
	return array;
}

function partition (array, left, right) {
	const pivot = array[right];
	let i = left - 1;

	for (let j = left; j <= right - 1; j++) {
		if (array[j] < pivot) {
			i++;
			let placeholder = array[j];
			array[j] = array[i];
			array[i] = placeholder;
		}
	}
	array[right] = array[i + 1];
	array[i + 1] = pivot;
	return (i + 1);
}
//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);