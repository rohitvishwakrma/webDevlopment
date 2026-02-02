import React from 'react'

function Event() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
     <button onClick={handleClick}>Click Me</button>;
    </>
  )
}

export default Event