import React from "react";
export default class MyState extends React.Component{
    state={
        name:"hot",
        // hobbies: ["basket","ffotball"]
    }
    handleClick(){
        console.log(this);
       this.setState({
           name: this.state.name=="hot"?"cold":"hot"
       })
    }
    handleClick2=()=>{
        console.log(this);
    }
    render() {

        return (
            <div>
                <h1 onClick={this.handleClick.bind(this)}>{this.state.name} </h1>
                <h1 onClick={this.handleClick2}>{this.state.name} </h1>

            </div>
        )
    }
}