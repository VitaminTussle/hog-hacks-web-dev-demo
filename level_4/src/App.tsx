import React, { useState } from 'react';

function App() {
  const [isSayingHi, setIsSayingHi] = useState(false);
  return (
    <div>
      <h1>hello world!</h1>
      <button
        className='border border-solid border-px border-black rounded-md p-2'
        onClick={() => setIsSayingHi(true)}
      >say hi!</button>
      {isSayingHi && (
        <p className='text-green-500'>hi!</p>
      )}
    </div>
  );
}

export default App;
