/*
Throttling -> runs after a particular interval of time. (scrolling on twitter)
Debouncing -> runs after an fixed interval but from the last execution of the function.(searching on google) <= search executes only after the user stops typing
*/

const incrementButton = document.querySelector('.increment');
const pressedBtn = document.querySelector('.pressed');
const countBtn = document.querySelector('.count');

let pressed = 0;
let count = 0;

let start = new Date().getTime();
const throttling = (func, limit) => {
	let last = 0;
	return function (...args) {
		let now = new Date().getTime();
		if (now - last > limit) {
			last = now;
			return func(...args);
		}
	};
};

const debouncing = (func, limit) => {
	let timer;
	return function (...args) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, limit);
	};
};

let debounce = debouncing(() => {
	countBtn.innerHTML = ++count;
}, 1000);

let throttle = throttling(() => {
	count += 1;
	countBtn.innerHTML = count;
}, 1000);

incrementButton.addEventListener('click', () => {
	pressedBtn.innerHTML = ++pressed;
	debounce();
});
