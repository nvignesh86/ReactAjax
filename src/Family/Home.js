import React,{Component} from 'react';
import {Route,withRouter,Switch,Link } from 'react-router-dom';
import {browserHistory } from 'react-router';
import { PageHeader,Well,ButtonToolbar,Button } from "react-bootstrap";
import {connect} from 'react-redux';
import Mother from './Mother';
import Father from './Father';
import Brother from './Brother';
import Spouse from './Spouse';
import Daughter from './Daughter';
import Son from './Son';
import logo from './../logo.svg';

class Home extends Component{
    constructor(props){
        super(props);
        console.log("Store:",connect);
    }

    openMember=(relationShip)=>{        
        this.props.history.push("/"+relationShip);  // By install (history) node module. we can achieve this.                              
    }

    componentDidMount=()=>{
        const {props:{reduxDispatch}} = this;
        fetch("http://localhost:3000/getFamily?id=1",{mode: 'cors'})        
        .then(response => response.json())
        .then((response) => {               
               reduxDispatch({type:'FAMILY_UPDATE',payload:response[0]})
        })       
    }
    
    render=()=>{
        const {props:{reduxState:{value,familyDetails:{name}}}} = this;
        return (
            <div>                
                <PageHeader>
                  <Well bsSize="large"> {name} <small>Family</small></Well>                    
                </PageHeader>          
                <div className="title">{value} - this text updated via redux store evethough it is different route</div>
                <br/>
                <div className="row">
                <div className="col-sm-2">
                    <Button bsStyle="primary" style={{width:'90%'}} onClick={this.openMember.bind(this,'')}>Mother</Button>
                </div>
                <div className="col-sm-2">
                    <Button bsStyle="primary" style={{width:'90%'}} onClick={this.openMember.bind(this,'father')}>Father</Button>
                    </div>
                <div className="col-sm-2">
                    <Button bsStyle="primary" style={{width:'90%'}} onClick={this.openMember.bind(this,'brother')}>Brother</Button>
                    </div>
                <div className="col-sm-2">
                    <Button bsStyle="primary" style={{width:'90%'}} onClick={this.openMember.bind(this,'spouse')}>Spouse</Button>
                    </div>
                <div className="col-sm-2">
                    <Button bsStyle="primary" style={{width:'90%'}} onClick={this.openMember.bind(this,'daughter')}>Daughter</Button>
                    </div>
                <div className="col-sm-2">
                    <Button bsStyle="primary" style={{width:'90%'}} onClick={this.openMember.bind(this,'son')}>Son</Button>
                 </div>   
                </div>     

   
       <div>
     

      <hr />

              
                    <Switch>
                     <Route exact  path="/"component={Mother} />
                     <Route path="/father" component={Father} />
                     <Route path="/brother" component={Brother} />
                     <Route path="/spouse" component={Spouse} />
                     <Route path="/daughter" component={Daughter} />
                     <Route path="/son" component={Son} />
                    </Switch>
                    </div>
                  

            </div>
        );
    }
}

const mapStateToProps = function(state){ //Attach redux state to Props.
    return {
      reduxState: state,
    }
  }
  
  const mapDispatchToProps = function (dispatch) { //Attach the reduc dispatch to props.
    return {
        reduxDispatch:dispatch
    }
  }

//export default Home;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))