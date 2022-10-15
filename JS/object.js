// SECTION Arrays

// declaration
const emptyArray = [];
const arrayWithValues = [1, 2, 3, 4, 5];

/*
Recall that arrays can store many different types of data, not just strings!
Below, create an array called `mixedArray` that contains:

* A number
* A string
* A boolean
* Another array

The order and length of the array are up to you; just be sure to include
at least one of each data type listed above.
*/

const mixedArray = [1, 'string', true, [1, 2, 3]];

// SECTION Objects

// can only reference using key not by index[number] and each key-value pair is separated by a comma,
// key can only be string but quotes are not important and value can be any type of data
const objectName = {
	key: 5,
	key1: 'value1',
	key2: 'value2',
};
// console.log(objectName.key1);

/*
Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

* name
* price
* ingredients

Hint: Which data collection can hold all the listed ingredients in order?
*/
/*
const menu = {
	name: 'Salted Caramel Ice Cream',
	price: 2.95,
	ingredients: ['butter', 'ice cream', 'salt', 'sugar'],
};
// to access the value of the key use either dot notation or bracket notation with "quotes" else it will be undefined as it will try to access the variable with the same name
console.log(
	`${menu['name']} for  ${menu['price']} which has ${menu['ingredients']}`
);

const populations = {
	china: 1379000000,
	brazil: 207700000,
	india: 1324000000,
	unitedStates: 323100000,
};

console.log(populations['brazil']);

// say hello in Portuguese:
const greetings = {
	hello: {
		english: 'hi',
		french: 'bonjour',
		portuguese: 'oi',
	},
	goodbye: {
		english: 'bye',
		french: 'au revoir',
		portuguese: 'tchau',
	},
};

console.log(greetings.hello.portuguese);
*/
/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/

const chameleon = {
	color: 'pink',
	changeColor: function () {
		this.color = 'green';
	},
};

// console.log(chameleon.color);
// chameleon.changeColor();
// console.log(chameleon.color);

const aboutMe = {
	name: 'Arpit Chugh',
	age: 21,
	'favorite color': 'army green',
	skills: ['html', 'css', 'js', 'react', 'node', 'mongoDB', 'python', 'UI/UX'],
};

const list = [];
// store value form object in array using it's key
for(const key in aboutMe){
	list.push(aboutMe[key]);
}
// using .value() method
const list1 = Object.values(aboutMe);
// using .entries() method
const list2 = Object.entries(aboutMe); // convert object to a 2D array => [[key, value], [key, value], [key, value]]

// using .keys() method 
const list3 = Object.keys(aboutMe); // return all keys of the object

// store key form object in an array
const list4 = [];
for( const key in aboutMe){
	list4.push(key);
}

console.log(list4);


// ===============

function oje(){
	let name1 = 'Arpit';
	const display = () => {
		console.log('hi ' + name1)
	}
}
console.log(oje.name1);

let person = {name: 'Arpit', age: 21};
const member = [person];
member.name = 'chugh';
console.log(member)
console.log(person)