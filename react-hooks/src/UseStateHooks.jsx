import { useState } from 'react';

const UseStateHook = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	function savdhan() {
		setCount(0);
		alert('bs kro kitna dbao ge');
	}
	return (
		<>
			<h1>hi how <span style={{color: 'purple'}}>do ju do</span>? my besto freind<span style={{color: 'brown'}}>0</span>!!</h1>
			<button
				onClick={increment}
				style={count < 10 ? { cursor: 'pointer' } : {}}
			>
				don't press me
			</button>
			<h2>you have clicked {count} times</h2>
			<button
				onClick={decrement}
				style={
					count <= 0
						? { background: 'white', color: 'red' }
						: { cursor: 'pointer' }
				}
				disabled={count <= 0}
			>
				{count <= 0 ? 'stoppppp' : 'press me, aaaa'}
			</button>
			{count > 10 ? savdhan() : null}
		</>
	);
};
export default UseStateHook;
