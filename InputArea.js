import React from 'react'

const InputArea = ({text, onTextChange}) => {
  return (
    <div>
        <textarea
        value={text}
        onChange={onTextChange}
        placeholder='Enter Text Here'
        />
    </div>
  );
}

export default InputArea