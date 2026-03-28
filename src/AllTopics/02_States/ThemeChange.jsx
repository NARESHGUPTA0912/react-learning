import { useState } from "react";

const ThemeChange = () => {
    const [theme, setTheme] = useState("dark");

    const handleTheme = () => {
        console.log("Theme Changed");

        setTheme((prev) =>  (prev === "dark" ? "light" : "dark"));

        document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
        document.body.style.color = theme === "dark" ? "white" : "black";
    };
    console.log(theme);
    return (
        <section
            // style={{
            //     backgroundColor: theme === "dark" ? "black" : "white",
            //     color: theme === "dark" ? "white" : "black",
            //     height: "100vh",
            //     display: "flex",
            //     flexDirection: "column",
            //     justifyContent: "center",
            //     alignItems: "center",
            // }}
        >
            <h1>Theme Change Task</h1>
            <button onClick={handleTheme}>Switch to {theme} Mode</button>
        </section>
    );
};

export default ThemeChange;