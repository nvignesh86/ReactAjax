import React,{Component,Fragment} from 'react';
import Landing from './Landing';
import $ from 'jquery';
import {Button} from 'react-bootstrap';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }
    }

    textChange=(el)=>{
        console.log(arguments);
        this.setState({
            value:el.target.value
        })
    }

    click=()=>{
        console.log($("#ttt").html());
    }

    render=()=>{
        return (
            <Fragment>
            <div>Home Rendered</div>
            <Landing data={this.state.value}/>
            <input type="text" value={this.state.value} onChange={this.textChange}/>
            <Button bsStyle="success" onClick={this.click}>Click</Button>
            </Fragment>
        );
    }    
}
export default Home;