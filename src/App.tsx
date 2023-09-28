import Layout from '@/layout'
import 'animate.css'

import Loading from './components/Loading'
import './App.scss'

function App() {
	return (
		<div className='app-container relative min-h-full'>
			{/*loading*/}
			<Loading />
			<Layout />
		</div>
	)
}

export default App
