import React, { useState } from 'react';
import HiText from './hi';

const App = () => {
  const [isSayingHi, setIsSayingHi] = useState(false);
  return (
    <div>
      <h1 className='text-2xl'>hello world!</h1>
      <button
        className='border border-solid border-px border-black rounded-md p-2'
        onClick={() => setIsSayingHi(true)}
      >
        say hi!
      </button>
      <HiText show={isSayingHi} />
    </div>
  );
}

export default App;
