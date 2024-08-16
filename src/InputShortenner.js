import {useState} from 'react'

const InputShortenner = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }
  return (
    <div className="inputContainer">
        <h1>URL <span>Shortener</span></h1>
        <div>
            <input 
            type="text" 
            placeholder="Shorten your link"
            value={value}
            onChange={(e) => setValue(e.target.value)}
             />
            <button onClick={handleClick}>Shorten</button>
        </div>
    </div>
  )
}

export default InputShortenner