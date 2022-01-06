import React from "react";

export default class MyRef extends React.Component{
    ref1 = React.createRef();

    handleBlur1=()=>{
        console.log(this.refs.input1.value);
    }
    handleBlur2=()=>{
        const {input2} = this;
        console.log(input2.value);
        input2.value=""
    }
    handleBlur3=()=>{

        console.log(this.ref1);
        // alert(this.ref1.current)
        console.log(this.ref1.current.value);
        //this.ref1.value=""
    }
    render() {
        return (
            <div>
                <input type="text" ref="input1" onBlur={this.handleBlur1} placeholder="enter please"/>
                <br/>
                <input type="text" ref={c=>this.input2=c} onBlur={this.handleBlur2} placeholder="enter please"/>
                <br/>
                <input type="text" ref={this.ref1} onBlur={this.handleBlur3} placeholder="enter please"/>

            </div>
        )
    }
}

