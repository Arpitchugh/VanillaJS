import { useRef, useState } from 'react';

const UseRefHooks = () => {
	const ref = useRef();
	const [text, setText] = useState('mr, chugh');
	return (
		<>
			<input type='text' ref={ref} placeholder='let change the text' />
			<button
				style={{ marginLeft: '10px' }}
				onClick={() => {
					setText(ref.current.value);
					ref.current.focus();
				}}
			>
				want something else? 👀
			</button>
			<h4>{text}</h4>
		</>
	);
};

export default UseRefHooks;
