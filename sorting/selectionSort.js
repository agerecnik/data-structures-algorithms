//Never actually used in practice.

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minNumberIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minNumberIndex]) {
				minNumberIndex = j;
			}
		}
		let placeholder = arr[i];
		arr[i] = arr[minNumberIndex];
		arr[minNumberIndex] = placeholder;
	}
}