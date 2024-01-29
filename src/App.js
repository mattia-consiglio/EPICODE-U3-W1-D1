import logo from './logo.svg'
import './App.css'
import ButtonComponent from './ButtonComponent'
import ImageComponent from './ImageComponent'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<ButtonComponent text='Hello World' />
				<ImageComponent src='https://picsum.photos/200/300' alt='Random image' />
			</header>
		</div>
	)
}

export default App
