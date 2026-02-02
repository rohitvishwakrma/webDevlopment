import React, { useCallback, useState,  } from "react";

function UseCallBack() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </>
  );
}

export default  UseCallBack;
