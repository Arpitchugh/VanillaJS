let arr = [ 1, 3, 5, 3, 7 ];

function BubbleSort() {
	// bubble sorting
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

function MergeSort(array) {
	let l = 0;
	let r = array.length;
	let m = Math.round((r - l) / 2);

	if (r === 1) {
		return; // returns recursively
	}

	let L = []; // left half of current array
	let R = []; // right half of current array

	for (let i = l; i < m; i++) {
		L.push(array[i]);
	}
	for (let j = m; j < r; j++) {
		R.push(array[j]);
	}

	MergeSort(L);
	MergeSort(R);

	let i = 0,
		j = 0,
		k = 0;

	// Merging part
	while (i < L.length && j < R.length) {
		if (L[i] < R[j]) {
			array[k] = L[i];
			i++;
		} else {
			array[k] = R[j];
			j++;
		}

		k++;
	}

	while (i < L.length) {
		array[k] = L[i];
		i++;
		k++;
	}

	while (j < R.length) {
		array[k] = R[j];
		j++;
		k++;
	}
}
MergeSort(arr)
console.log(arr)