import { useReducer } from 'react';

const UseReducerHook = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'increment':
				return { count: state.count + 1, showText: state.showText };
			case 'decrement':
				return { count: state.count - 1, showText: state.showText };
			case 'toggleText':
				return { count: state.count, showText: !state.showText };
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
	return (
		<>
			<h1>{state.count}</h1>
			<button onClick={() => dispatch({ type: 'increment' })}>
				want more? 👀
			</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>
				to spicy 🥵
			</button>
            <button onClick={() => dispatch({ type: 'toggleText' })}>don't want text🤮</button>
			{state.showText && <p>hi fuck shit</p>}
		</>
	);
};

export default UseReducerHook;
