// import React from 'react';
import { useContext } from "react";
import { myStoreContext } from "./ContextProvider";

const ContextChild2 = () => {

    // Step 3: Consume a context using useContext() hook, it aacepts a context object (the value returned from createContext()) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <myStoreContext.Provider> above the calling component in the tree.
    let data = useContext(myStoreContext);
    console.log("Data from Context API", data);
  return (
    <div>
      <h1>Child 2 Component <br/>
      {data.data1} 
        <br/>
      {data.data2.join(", ")} </h1>
    </div>
  );
};

export default ContextChild2;
