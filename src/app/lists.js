import React from 'react'
import lists from './myapp.module.css'
export default class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state={
             p1 : this.props.p1
        }
    }
    render() {
          const p = this.props.p1;
        return (
            <div className={lists.gaoLiang}>
                {/*<ul>*/}
                {/*    {this.state.p.map(v=>{ return <li key={v} >{v}</li>})}*/}
                {/*</ul>*/}
            </div>)
    }
}