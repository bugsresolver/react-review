import {Component} from "react";

export class MyProps extends Component{

    render(){
        const p = {
            name: "props",
            age : 12,
            sex: "m"
        }
        return (
            <div>
                <MyProps {...p} ></MyProps>
            </div>
        )
    }
}