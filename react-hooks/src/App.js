import './App.css';
import UseStateHook from './UseStateHooks';
import UseEffectHooks from './UseEffectHooks';
import UseMemoHooks from './UseMemoHooks';
function App() {
	return (
		<div className='App'>
			<p>------------------ useState ------------------</p>
			<UseStateHook />
			<p>------------------ useEffect ------------------</p>
			<UseEffectHooks />
			<p>------------------ useMemo ------------------</p>
			<UseMemoHooks />
		</div>
	);
}

export default App;
