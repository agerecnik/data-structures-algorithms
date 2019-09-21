function mergeSortedArrays(array1, array2) {
	mergedArray = [];
	counter = 0;
	for (let i = 0; i < array1.length; i++ ) {
		for (let j = counter; j < array2.length; j++) {
			if (array1[i] > array2[j]) {
				mergedArray.push(array2[j]);
				counter++;
			}
			else if (array1[i] === array2[j]) {
				mergedArray.push(array2[j]);
				counter++;
				break;
			}
			else  {
				break;
			}
		}
		mergedArray.push(array1[i]);
	}
	if (counter != array2.length) {
		for (let i = counter; i < array2.length; i++) {
			mergedArray.push(array2[i]);
		}
	}
	console.log(mergedArray);
}

mergeSortedArrays([0,3,4,31], [3,4,6,30,50,100,100]);