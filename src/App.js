import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortenner from './InputShortenner';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <InputShortenner setInputValue={setInputValue}/>
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
