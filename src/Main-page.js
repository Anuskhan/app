import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import {browserHistory} from 'react-router';
// import { Button } from 'reactstrap';

class MainPage extends Component {
constructor(props){
    super(props)
    this.state={
        
    }
}   
render(){
    return( 
        <MuiThemeProvider>
        <div  className="title">
    <AppBar 
        title="Crime Report App"  className="title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <RaisedButton label="Missing Reports"  onClick={()=>{browserHistory.push("/MissingShow")
  }} primary={true} style={{margin: 15,width:500,}} />
      <br/>
      <RaisedButton label="Crime Reports" onClick={()=>{browserHistory.push("/CrimeShow") }} primary={true} style={{margin: 15,width:500,}} />
      <br/>
      <RaisedButton label="Register Report"  onClick={()=>{browserHistory.push("/signup")
  }} primary={true} style={{margin: 15,width:500,}} />

        <br/>
 </div>
      
      </MuiThemeProvider>
    )
}

}
    
export default MainPage;