import { useState } from "react";
const StatesInFBC = () => {

    const [data, setData] = useState("Hello EveryOne ");   // [undefined, f]
    const handleButton = () => {
        setData("Bye EveryOne ");
    };
    
    const [cart, setCart] = useState("Add to cart");
    const handleCart = () => {
        setCart("Go to Cart");
    }
    
    return (
        <>
            <h1> Learn States in Function Based Component</h1>
            <h2>{data}</h2>
            <button onClick={handleButton}>update</button>
            <hr/>
            <button onClick={handleCart}>{cart}</button>
        </>
    );
};

export default StatesInFBC;