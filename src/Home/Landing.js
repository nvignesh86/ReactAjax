import React,{Component,Fragment} from 'react';

export default class Landing extends Component{
    constructor(props){
        super(props);
    }

    render=()=>{
        return (
            <Fragment>
                <div id={"ttt"}>Landing Rendered {this.props.data}</div>
                <div>Landing Rendered {this.props.data}</div>
            </Fragment>
        )
    }
}
