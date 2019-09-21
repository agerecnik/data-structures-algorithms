//Used when we have only a few items (small input) and mostly sorted data.

function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j <= i; j++) {
			if (arr[i] < arr[j]) {
				let placeholder = arr[i];
				for (let k = i; k > j; k--) {
					arr[k] = arr[k - 1]; 
				}
				arr[j] = placeholder;
			}
		}
	}
}