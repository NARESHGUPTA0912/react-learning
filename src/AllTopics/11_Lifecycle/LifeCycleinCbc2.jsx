import React, { Component } from "react";

// Life Cycle Methods in Class Based Component

// 1. Mounting Phase : constructor() -> render() -> componentDidMount()
// 2. Updating Phase : render() -> componentDidUpdate()
// 3. Unmounting Phase : componentWillUnmount()
export default class LifeCycleinCBC2 extends Component{

    state = {count : 0};

    increment = () => {
        this.setState({count : this.state.count+1});
    }

    componentDidMount(){
        console.log("Component mounted");
    }

    componentDidUpdate(){
        console.log("Component Updated");
    }

    componentWillUnmount(){
        console.log("Component Unmounted");
    }

    render(){
        return (
            <div>
                <h1>Learn Lifecycle in CBC 2
                    {this.state.count}
                </h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}