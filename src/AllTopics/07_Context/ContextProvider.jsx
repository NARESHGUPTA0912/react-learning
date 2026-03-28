import { createContext } from "react";

// Step 1: Create a context using createContext() method, returns an object with two components: Provider and Consumer

export const myStoreContext = createContext();

const ContextProvider = (props) => {
    console.log(props);   // props is an object that contains all the properties passed from the parent component {data: "Hi"}
    let data1 = "Hello Context API";
    let data2 = [10, 20, 30];

    // Step 2: Provide the Context with data
    return (
        <myStoreContext.Provider value={{ data1, data2 }}>
             {/* Step 3: Consume the Context in any child component using useContext */}
            {props.children}
        </myStoreContext.Provider>
    );
}

export default ContextProvider;



// if we want to give their access to every child component then we can wrap the ContextProvider around the entire application in App.jsx like this:
// <ContextProvider> <App/> </ContextProvider>