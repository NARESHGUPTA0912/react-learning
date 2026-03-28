import {useEffect, useState, useRef} from "react";

const LifeCycleInFBC = () => {

    const [count, setCount] =useState(0);
    const initialRender = useRef(true);   // {current: true}

    useEffect(() => {
        console.log("Component Mounted");

        let id = setInterval(() => {
            console.log("API Call");
        }, 1500);

        return () => {
            console.log("Component Unmounted");
            clearInterval(id);
        };
    },[]);

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false;
            return;
        }

        console.log("Component Updated");
    }, [count]);

    return (
        <div className="p-5"> 
            <h1 className="text-center text-4xl">
                Learn Lifecycle in FBC {count}
            </h1>
            <button onClick={() => setCount((prev) => prev+1)}>
                increment
            </button>
        </div>
    );
};

export default LifeCycleInFBC;