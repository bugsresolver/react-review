import {Component} from "react";

export default class MyRefs extends Component {
    handleClick=(event)=>{
        const {input1} = this;
        console.log(input1.value);
    }
    handleBlur=(event)=>{
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={r=>this.input1=r} onBlur={this.handleBlur}/>
                <button onClick={this.handleClick}>click on me</button>
            </div>)
    }
}