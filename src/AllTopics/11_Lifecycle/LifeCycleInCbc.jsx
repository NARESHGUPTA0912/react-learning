import React from "react";
import { Component } from "react";

export default class LifeCycleInCbc extends Component{
    constructor(){
        super();
        console.log("I am Constructor");
        this.state = {count : 0}
        
    }

    increment = () => {
        this.setState((prev) => ({count : prev.count+1}));
    } 

    componentDidMount(){
        console.log("Component Mounted Successfully");
        this.id = setInterval(() =>{
            console.log("API Call");
        }, 2000);
    }

    componentDidUpdate(){
        console.log("Component Updated Successfully");
    }

    componentWillUnmount(){
        console.log("Component Unmounted ");
        clearInterval(this.id);
    };

    render(){
        console.log("I am Render");

        return (
            <div className="p-5">
                <h1 className="text-center text-4xl">
                    Learn Lifecycle of a Component {this.state.count}
                </h1>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }

}