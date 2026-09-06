import React from "react";

const ErrorCounter = () => {
  const [count, setCount] = React.useState(0);

  if (count > 5) {
    throw new Error("Count exceeded 5");
  }
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ErrorCounter;
