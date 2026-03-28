import { Component } from "react";
class StatesInCBC extends Component {
    constructor() {
        super();
        // this.state = {
        //     data: "Hello Everyone"
        // };
        this.state = { count : 0};
    }

    increment = () => {
        this.setState((prev) => {
            return {count: prev.count + 1};
        });
    }

    decrement = () => {
        this.setState(() => {
            if(this.state.count > 0){
                return {count: prev.count - 1};
            }
        });
    };

    reset = () => {
        thiis.setState({count: 0});
    };

    render() {
        console.log(this);
        
        return  (
            <>
            <h1> States in CBC </h1>
            {/* <h2>{this.state.data}</h2> */}
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
            <h2>Counter : {this.state.count}</h2>
            </>
        );
    }
}

export default StatesInCBC;
