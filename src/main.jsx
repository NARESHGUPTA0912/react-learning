// ! React way
import { createRoot } from "react-dom/client";
import App from "./App";
import CodeSplittingExample from "./AllTopics/21_CodeSplitting/CodeSplittingExample";
import "./index.css";           // global css
createRoot(document.getElementById("root")).render(
    
    <App/>
    // <CodeSplittingExample /> 
    

    /*
    <h1>Hello React</h1>
    <h1>Hello Everyone</h1>
    */
);


// ! Js Way
// const div = document.getElementById("root")
// const h1Tag = document.createElement("h1")
// h1Tag.textContent = "Hello React";
// div.append(h1Tag);