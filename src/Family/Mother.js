import React,{Component} from "react";
import {connect} from 'react-redux';
import motherImg from './../images/mother.jpg';
import {Grid,Row,Col,Image,Button} from 'react-bootstrap';
import fetch from 'cross-fetch'

class Mother extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount=()=>{
        const {props:{reduxDispatch}} = this;
        reduxDispatch({type:'ADD',value:"Mother"})
        console.log()
    }

    getFamily=()=>{
        const {props:{reduxDispatch}} = this;
        fetch("http://localhost:3000/getFamily?id=2")
        .then(res => res.json())
        .then((response) => {
            if(response && response[0]){
                reduxDispatch({type:'FAMILY_UPDATE',payload:response[0]})
            }
        })        
    }

    render=()=>{
        const {props:{reduxState:{familyDetails:{mother}}}} = this;
        return (
            <div>
            <div>Mother</div>
            <Grid>
            <Row>
                <Col xs={6} md={3}>
                <Image style={{width:'400px',height:'400px'}} src={"/images/mother.jpg"} rounded />
                </Col>
                <Col xs={6} md={9}>
                <div>{mother}</div>
                <div><Button bsStyle="success" onClick={this.getFamily}>Get getFamily</Button></div> 
                </Col>                
            </Row>
            </Grid>
            </div>    
        );
    }
}
const mapStateToProps = function(state){
    return {
      reduxState: state,
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
        reduxDispatch:dispatch
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Mother)