import React,{Component} from "react";
import {connect} from 'react-redux';
import brotherImg from './../images/brother.jpg';
import {Grid,Row,Col,Image} from 'react-bootstrap';

class Brother extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount=()=>{
        const {props:{reduxDispatch}} = this;
        reduxDispatch({type:'ADD',value:"Brother"})
        console.log()
    }

    render=()=>{
        const {props:{reduxState:{familyDetails:{brother}}}} = this;
        return (           
            <div>
            <div>Brother</div>
            <Grid>
            <Row>
                <Col xs={6} md={3}>
                <Image style={{width:'400px',height:'400px'}} src={brotherImg} rounded />
                </Col>
                <Col xs={6} md={9}>
                   {brother}
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
  export default connect(mapStateToProps,mapDispatchToProps)(Brother)