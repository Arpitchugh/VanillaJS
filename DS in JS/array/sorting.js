let arr = [8, 3, 5, 3, 7, 1];

function SelectionSort(){
	function swap(a,b){
		let temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}
	/*		select the smallest value and bring it to the front..	*/
	for(let i=0;i<arr.length;++i){
		for(let j=i+1;j<arr.length;++j){
			console.log(i,j);
			if(arr[i]>arr[j]){
				swap(i,j);
			}
		}
	}
}

// SelectionSort();

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

// Insertion sort
// used consoles to understand the working of the algorithm, remove them !!!!
function InsertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let key = array[i];
		let j = i - 1;
		console.log(`key : ${key}`);
		while (j >= 0 && array[j] > key) {
			console.log(`index at ${j}: ${array[j]}\n`);
			console.log(`index at ${j + 1}: ${array[j + 1]}\n`);
			array[j + 1] = array[j];
			j--;
		}
		console.log(`index at ${j + 1}: ${array[j + 1]}\n`);
		array[j + 1] = key;
		console.log(`index at ${j + 1}: ${array[j + 1]}`);
	}
}
InsertionSort(arr);

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
// MergeSort(array)

function HeapSort(array){
	 
}
console.log(arr);

// =================================================================================
// Sort method behavior itself... ;)

// const arr = [3,53,423,534,3];
// console.log(arr.sort());

// const names = ["fahad", "taha", "salman", "mojeeb"]; // This looks good but if we solve this sort this like with capital letters it'll give first priority to capital letter then it'll sort small letters the example is given below

// names.sort();
// console.log(names);

// Example
const namesWithCapitalLetters = ["fahad", "Taha", "salman", "mojeeb"];
namesWithCapitalLetters.sort();

// console.log(namesWithCapitalLetters);

// That's how it works :)

// How to get expected output

// const arr = [3,53,423,534,3];
// console.log(arr.sort()); ---> We're not getting expected output while we're doing this but there is a way with that we can get our expected output

// The way

// const arr = [3, 53, 423, 534, 3];
// console.log(arr.sort((a, b) => a - b));

// How this is working questing is this?

// What javascript here doing is first javascript 3 and 52 a = 3 b = 52; And now if we 3 to 52 and we'll get number greater than 0 then javascript sort those numbers in order of b then a ---> like 52, 3 and if we got the output less than 0 then javascript sort the number in order of a, b ---> 3  52 and yes you're right this is the correct output :)

// A use case of sort method

// Imagine you have a ecommerce site and you want to sort products prices then how can you sort the prices of products with sort method example given below

// Example
const userCart = [
  { producdId: 1, producdPrice: 355 },
  { producdId: 2, producdPrice: 5355 },
  { producdId: 3, producdPrice: 34 },
  { producdId: 4, producdPrice: 3535 },
];

// Use this for low to high
userCart.sort((a, b) => a.producdPrice - b.producdPrice);

// console.log(userCart)

// ===================================

// Use this for high to low
userCart.sort((a, b) => b.producdPrice - a.producdPrice);

// console.log(userCart)

// ==============The End=================