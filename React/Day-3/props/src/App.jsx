
import React from "react";
import Empty from "./components/Empty";
import Item from "./components/Item";

let Items =["oil","shop","sugur","milk","laddu","cake","biscuit"];
function App(){
  return(
  <>     {/* fragment */}
    <center>
  <h1>Items</h1>
   <Item></Item>
   <Empty></Empty>
    </center>
  </>
  );
}
export default App;
//