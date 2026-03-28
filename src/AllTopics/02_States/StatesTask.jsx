import { useState } from "react";

const StatesTask = () => {
  const [isVisible, setIsVisible] = useState(false);  // initial

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };


  // && => if the first condition is true, then the second part will be rendered (short-circuit evaluation)
  return (
    <>
      <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>

      {isVisible && (
        <>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </>
      )}
    </>
  );
};

export default StatesTask;
