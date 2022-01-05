import React from "react";
import {MyTest1, name} from "./learning/MyTest1"
export default class MyApp extends React.Component{
    names =["aaa", "bbb", "ccc"];
    render() {

        return(
            <div>
                <MyTest1></MyTest1>
                <p>{`my name is ${name}`}</p>
                <ul>
                    {this.names.map(n=>{
                        return <li key={n}>{n}</li>
                    })}
                </ul>
            </div>
        )
    }
}