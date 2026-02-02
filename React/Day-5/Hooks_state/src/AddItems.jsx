import React, { useRef, useState } from "react";

function AddItems() {
  const inputRef = useRef(null);        // reference to input field
  const [items, setItems] = useState([]); // state to store list items

  const addItem = () => {
    const value = inputRef.current.value;

    if (value.trim() === "") return;

    setItems([...items, value]);        // update state (re-render)
    inputRef.current.value = "";        // clear input
    inputRef.current.focus();           // focus input again
  };

  return (
    <>
      <h2>Add Items</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter item"
      />

      <button onClick={addItem}>
        Add Item
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AddItems;
