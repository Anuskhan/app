import React, { Component } from 'react';

import './App.css';
// import {browserHistory} from 'react-router';
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
signup=()=>{

  let stateobj ={
    name:this.state.name,
    email:this.state.email,
    pass:this.state.pass
  }
  fire.auth().createUserWithEmailAndPassword(stateobj.email,stateobj.pass)
  .then((res)=>{
    console.log("success")
    stateobj.key=res.uid;
      fire.database().ref("/").child("user/"+res.uid).set(stateobj)
    .then(()=>{
      
    })
    })
    .catch((error)=>{console.log(error)})


}
  
  valueGet=(inputFld,ev)=>{
    let obj={}
    obj[inputFld]=ev.target.value;
    this.setState(obj)
    console.log(obj)
  }

  // comChange=()=>{
  //   console.log("work")
  //       browserHistory.push("/login")
  
  // }

  
    render(){
return(
    <div>
      <input type="text" value={this.state.name} onChange={(ev)=>{this.valueGet("name",ev)}}/>
      <input type="email" value={this.state.email} onChange={(ev)=>{this.valueGet("email",ev)}}/>
      <input type="password" value={this.state.pass} onChange={(ev)=>{this.valueGet("pass",ev)}}/>
        <button onClick={this.signup}>submit</button>

    </div>


);
}
}

export default Sign;
