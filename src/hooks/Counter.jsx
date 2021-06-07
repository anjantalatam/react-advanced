import React, { useState, Fragment } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} clicked for {count} times
      </div>
      <button onClick={() => setCount(count + 1)}> increase</button>
    </Fragment>
  );
}

export default Counter;
