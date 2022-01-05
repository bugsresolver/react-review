import React from 'react'
import {MyState} from "./MyTestState";
// import {MyProps} from "./MyPropsTests";
import MyRefs from "./MyRefsTests";
class MyTest1 extends React.Component{
    render() {
        return (
            <div>
                <MyState></MyState>
                console.log("==========================);
                {/*<MyProps></MyProps>*/}
                <MyRefs></MyRefs>
            </div>
        )
    }
}
let name = "aaa";
export {MyTest1};
export {name};