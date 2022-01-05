import React from 'react'
export class MyProps extends React.Component{

    render(){
        console.log(this);
        console.log(this.props.name);
        return (
            <div>props</div>
        )
    }
}