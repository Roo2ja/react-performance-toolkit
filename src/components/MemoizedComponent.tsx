import React, { useState } from "react";

const ExpensiveComponent = React.memo(({ count }: { count: number }) => {
  console.log("Rendering ExpensiveComponent");
  return <p>Count: {count}</p>;
});

const MemoizedComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h2>React.memo Example</h2>
      <ExpensiveComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input placeholder="Type here..." onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default MemoizedComponent;
