import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import {browserHistory} from 'react-router';
import fire from './firebase';

let that=this;

class Sign extends Component {
constructor(props){
  super(props);
  this.state={
     name:"",
     email:"",
     pass:""

  }
}

  signUp=()=>{
    if(this.state.pass!=="" && this.state.email!=="" && this.state.pass!==""){
    let state=this.state;
    let database = fire.database().ref('/')
    let stateObj={
        name:state.name,
        email:state.email,
        pass:state.pass
    }
    fire.auth().createUserWithEmailAndPassword(stateObj.email,stateObj.pass)
    .then((res)=>{
        stateObj.userID = res.uid;
        database.child('users/' + res.uid).set(stateObj)
       
        .then(function(){
          
       
          
          browserHistory.push("/home")    
        })
  })
   .catch((error)=>{
      console.log(alert(error));
    })
  }
  else{alert("fill All field")}
}
  valueGet=(inputFld,ev)=>{
    let obj={}
    obj[inputFld]=ev.target.value;
    this.setState(obj)
    // console.log(this.state.inputFld)
  }

  comChange=()=>{
    console.log("work")
        browserHistory.push("/login")
  
  }

  
    render(){
     

return(
<MuiThemeProvider>
    <div  className="title">
<AppBar 
    title="SignUp"   className="title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
   <TextField
      hintText="Name" onChange={(ev)=>{this.valueGet("user",ev)}}
      floatingLabelText="User Name"
      type="Text"
    />
    <br/>
    <TextField
      hintText="Email" onChange={(ev)=>{this.valueGet("email",ev)}}
      floatingLabelText="User Email"
      type="Email"
    />
    <br/>
    <TextField
      hintText="Password " onChange={(ev)=>{this.valueGet("pass",ev)}}
      floatingLabelText="User Password"
      type="password"
    />
    <br/>
    <RaisedButton label="SigUp" onClick={this.signUp} primary={true} style={{margin: 15}} />
    
  <RaisedButton label="Login" onClick={this.comChange} primary={true} style={{margin: 15}} />
    </div>
  
  </MuiThemeProvider>
);
}
}

export default Sign;
