import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'animate.css'

import Loading from './components/Loading'
import './App.scss'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='app-container relative min-h-full'>
			{/*loading*/}
			<Loading />
			{/*TODO route*/}
			<div>
				<div>
					<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
						<img src={viteLogo} className='logo' alt='Vite logo' />
					</a>
					<a href='https://react.dev' target='_blank' rel='noreferrer'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
			</div>
		</div>
	)
}

export default App
