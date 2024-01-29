import './App.css'
import ButtonComponent from './ButtonComponent'
import ImageComponent from './ImageComponent'

function App() {
	const buttonsText = [
		'Hello World 1',
		'Hello World 2',
		'Hello World 3',
		'Hello World 4',
		'Hello World 5',
	]
	return (
		<div className='App'>
			<header className='App-header'>
				{buttonsText.map(text => (
					<ButtonComponent key={text} text={text} />
				))}
				<hr />
				<ImageComponent src='https://picsum.photos/200/300' alt='Random image' />
			</header>
		</div>
	)
}

export default App
