import { useState } from "react"
const Counter = () => {
    const [count, setCount] = useState(0);

    const incre = () => {
        // efficient way to update the state using callback function
        setCount((prev) => prev + 3);
        // setCount((prev) => prev + 1);
        // setCount((prev) => prev + 1);
    };

    const decre = () => {
        setCount((prev) => prev > 0 ? prev-1 : prev);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={incre}>increment</button>
            <button onClick={decre} disabled = {count === 0 ? true:false} >decrement</button>
            <button onClick={reset}>reset</button>
        </>
    );
};

export default Counter;