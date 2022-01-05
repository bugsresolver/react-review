import React from 'react'
import Header from './header'
import Lists from './lists'
import Bottom from './bottom'
export  default class MyApp extends React.Component{
    constructor() {
        super();
        this.state={
            p : [
                "coding","sleeping", "eating"]
        }
    }
    handleCtl = (data)=>{
        console.log(data);
        let newP = this.state.p;
        let n = data;
        console.log(newP);
        this.setState(
            {p: data}
        )
        console.log(newP);
    }
    render() {
        const p1 =this.state.p
        console.log(p1);
        return (<div>
            <Header handleCtl = {this.handleCtl}></Header>
            <Lists p1 = {p1}></Lists>
            <Bottom></Bottom>
        </div>)
    }

}