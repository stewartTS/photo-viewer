import logo from './logo.svg';
import './App.css';
import { PhotoViewer } from './photoViewer/photoViewer';
import ImageUrls from './photoViewer/imageSelector';
import React, { useEffect, useState } from 'react';
import { ImageGallery } from './photoViewer/imageGallery';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';


function App() {
	const [url, setURL] = useState(ImageUrls[0]);

	useEffect(() => {
		
		window.history.replaceState(null, null, `http://localhost:3000/images/${url}`);
	}, [url]);

	const {id} = useParams()

	return (
		<Router>
			<Switch>
				<Route path="/images/:id" >
					<Function />
				</Route>
			</Switch>
			<div className="App">
				<h1>React Photo Viewer</h1>
				<PhotoViewer src={url} />
				<h2>-- Gallery --</h2>
				<ImageGallery setURL={setURL} />
			</div>
		</Router>
	);
}

export default App;
