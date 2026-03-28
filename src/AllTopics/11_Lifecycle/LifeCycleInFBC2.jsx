import React, { useState, useEffect, useRef } from "react";

const LifeCycleInFBC2 = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true);

  // useEffect with empty dependency array runs only once when the component mounts. It has a cleanup function that runs when the component unmounts. it contains code for API calls, event listeners, or any side effects that need to be cleaned up to prevent memory leaks.
  // it initially run mounted with updated phase. so we use useRef to track the initial render and prevent the code inside useEffect from running on the initial render. This way, the "Component updated" message will only be logged when the count state changes after the initial render.
  
  useEffect(() => {
    console.log("Component mounted");

    // Simulating an API call with setInterval. In a real application, this could be an actual API call using fetch or axios.
    // unmounted function also known as cleanup function is used to clear the interval when the component unmounts to prevent memory leaks.
    
    const id = setInterval(() => {
      console.log("API Call");
    }, 1500);
    return () => {
      console.log("Component unmounted");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log("Component updated");
  }, [count]);

  return (
    <div>
      LifeCycleInFBC2
      <h1>Learn Lifecycle in FBC 2 {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifeCycleInFBC2;
