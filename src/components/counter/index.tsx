import * as React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count => count + 1);

  return (
    <div>
      <p data-testid="counter-label">You have clicked {count} times.</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
