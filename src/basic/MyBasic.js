import {Component} from "react";

import MyState from "./MyState";
import {MyProps} from "./MyProps";
import MyRef from "./MyRef";
export class MyBasic extends Component{

    render(){
        return (<div>
           <MyState></MyState>
            <MyProps name="asdf"></MyProps>
            <MyRef></MyRef>
        </div>)
    }

}