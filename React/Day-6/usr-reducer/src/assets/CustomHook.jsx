import React, { useState } from 'react'


const CustomHook = () => {
  //logic 
  const [count, setCount] = useState(0);

  const Add = () => setCount(c => c + 1);
  const Sub = () => setCount(c => c - 1);
  const Reset = () => setCount(0);

  return (
    <>
      <h1>Custom-hook</h1>
      <p>this custom hook..</p>
      <h1>Count:{count}</h1>
      <button onClick={Add}>+</button>
      <button onClick={Sub}>-</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default CustomHook