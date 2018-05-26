import React,{Component} from "react";
import {connect} from 'react-redux';
import daughterImg from './../images/daughter.jpg';
import {Grid,Row,Col,Image} from 'react-bootstrap';

class Daughter extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount=()=>{
        const {props:{reduxDispatch}} = this;
        reduxDispatch({type:'ADD',value:"Daughter"})
        console.log()
    }

    render=()=>{
        const {props:{reduxState:{familyDetails:{daughter}}}} = this;

        return (
            
            <div>
            <div>Daughter</div>
            <Grid>
            <Row>
                <Col xs={6} md={3}>
                <Image style={{width:'400px',height:'400px'}} src={daughterImg} rounded />
                </Col>
                <Col xs={6} md={9}>
                   {daughter}
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
  export default connect(mapStateToProps,mapDispatchToProps)(Daughter)