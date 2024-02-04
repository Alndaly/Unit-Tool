import * as fs from 'node:fs';
const App = () => {
	return (
		<div className='font-bold w-full h-screen flex flex-col justify-center items-center'>
			<h1
				onDragOver={(e) => {
					e.preventDefault();
				}}
				onDrop={(e) => {
					e.preventDefault();
					console.log(e.dataTransfer.files);
					// window.electron.startDrag('drag-and-drop-1.md');
				}}>
				Vite + React + Electron + Tailwind + Typescript
			</h1>
		</div>
	);
};

export default App;
