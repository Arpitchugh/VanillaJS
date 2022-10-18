import React, { useEffect, useState } from 'react';

const UseEffectHooks = () => {
	const call = 'hi when ever you click check if useEffect is called in console';
	const [button, setButton] = useState(0);
	useEffect(() => {
		console.log('UseEffectHooks call hogi!!!');
	}, [button]);
	return (
		<>
			<h1>hi shit, let's learn useEffect</h1>
			<p>{call}</p>
			{/* useEffect is called again only if values of setButton actually update so if just set callback function in onclick as setButton(2) <- it will only continue to run until button value is not 2 so it will work twice only as initially button value is 0. so to have it work without any restrictions make sure the value is getting updated always!!!  */}
			<button onClick={()=>setButton(button+1)}>call useEfect</button>
		</>
	);
};

export default UseEffectHooks;
