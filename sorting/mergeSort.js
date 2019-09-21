//Divide and conquer --> O (n log(n)) in all cases.
//If worried about worst case scenario, this is the algorithm to be used.
//Uses a lot of memory --> O (n).

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  const left = []
  for (let i = 0; i < array.length/2; i++) {
  	left.push(array[i]);
  }

  const right = []
  for (let j = left.length; j < array.length; j++) {
  	right.push(array[j]);
  }

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
	let sortedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			sortedArray.push(left[leftIndex]);
			leftIndex++;
		}
		else {
			sortedArray.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);