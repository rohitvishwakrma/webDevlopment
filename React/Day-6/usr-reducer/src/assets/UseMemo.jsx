import React, { useMemo, useState } from 'react'


const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation
  const expensiveResult =useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]); // runs only when count changes

  return (
   <>
      <h2>useMemo Example</h2>
      <p>Result: {expensiveResult}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
   </>
  )
}

export default UseMemo