import React from 'react'
export  default  class Header extends React.Component{
    handleKey=(event)=>{
        if(event.charCode==13){
            let p = event.target.value;
            let aa = this.props.handleCtl
            aa(p)
            event.target.value="";
            p  ="";
        }else{
            return;
        }
    }
    render() {


        return (<div>
            <input type="text" placeholder="please enter your input" onKeyPress={this.handleKey}/>

        </div>)
    }




}