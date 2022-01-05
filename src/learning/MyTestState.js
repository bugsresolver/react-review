import React from 'react'
class MyState extends React.Component{
    constructor() {
        super();
        this.state ={
            name: "ibm",
            hobbies: ["basketball", "eating"]
        }
    }
    onClickHandle(){
        console.log("click it");
        this.setState({
            name: "bbb"
        })
    }
    render(){
        return (
            <div>
                <p onClick={this.onClickHandle.bind(this)}>click</p>
                this.state
            </div>
        )
    }
}
export {MyState}