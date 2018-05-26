import React,{Component} from "react";
import {connect} from 'react-redux';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import fatherImg from './../images/father.jpg';

class Father extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount=()=>{
        const {props:{reduxDispatch}} = this;
        reduxDispatch({type:'ADD',value:"Father"})
        console.log()
    }

    render=()=>{
        const {props:{reduxState:{familyDetails:{father}}}} = this;
        return (
            <div>
            <div>Father</div>
            <Grid>
            <Row>
                <Col xs={6} md={3}>
                <Image style={{width:'400px',height:'400px'}} src={fatherImg} rounded />
                </Col>
                <Col xs={6} md={9}>
                    {father}
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
  export default connect(mapStateToProps,mapDispatchToProps)(Father)