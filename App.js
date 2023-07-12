import "./App.css";
import { useState } from "react";
import InputArea from "./components/InputArea";
import ResultDisplay from "./components/ResultDisplay";
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setWordCount(countWords(newText));
  };

  const countWords = (text) => {
   // Remove leading/trailing white spaces
  const trimmedText = text.trim();
  
  // Split the text into an array of words using regular expression
  const words = trimmedText.split(/\s+/);
  
  // Return the length of the words array
  return words.length;
  };

  return (
    <div className="container">
    <h1>Word Counter App</h1>
    <div className="input-area">
      <InputArea text={text} onTextChange={handleTextChange} />
    </div>
    <div className="result-display">
      <ResultDisplay wordCount={wordCount} />
    </div>
  </div>
  );
}

export default App;