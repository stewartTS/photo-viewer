import logo from './logo.svg';
import './App.css';
import { PhotoViewer } from './photoViewer/photoViewer';
import ImageUrls from './photoViewer/imageSelector';
import React, { useState } from 'react';
import { Gallery } from './photoViewer/imageGallery';


function App() {
  const [index, setCount] = useState(0);

  return (
    <div className="App">
      <p>Learn React</p>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={ImageUrls[index]}/>
      <h1>{index}</h1>
      <h1>imageurl: {ImageUrls[index]}</h1>
      <Gallery setCount={setCount} />
      
      {/*<button onClick={() => setCount(index + 1)}>CLICK!</button>*/}
      
    </div>
  );
}

export default App;
