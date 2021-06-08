import React, { useState, Fragment, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} clicked ${count} times`;
    return () => {
      console.log("Connection reset");
    };
  }, [count, name]);
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
