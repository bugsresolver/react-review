import {Component} from "react";

import MyState from "./MyState";
import {MyProps} from "./MyProps";

export class MyBasic extends Component{

    render(){
        return (<div>
           <MyState></MyState>
            <MyProps name="asdf"></MyProps>
        </div>)
    }

}