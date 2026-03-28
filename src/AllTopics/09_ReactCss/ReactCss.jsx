const ReactCss = () => {
    return (
        <div>
            <h1>Learn Css in React</h1>
            <div style = {{backgroundColor: "blue", color: "white", padding: "10px"}}>
                This is a div with inline css
            </div>
            <section className="my-section">
                This is a section with external css
            </section>
        </div>
    )
};

export default ReactCss;