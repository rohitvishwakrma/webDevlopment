import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (running === false) return;

    console.log("Effect started");

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Cleanup executed");
    };
  }, [running]);  // re-run when running changes

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect with Cleanup</h2>
      <p>Timer Count: {count}</p>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={()=>setCount(0)} > Reset</button>
    </div>
  );
}

export default UseEffect;
