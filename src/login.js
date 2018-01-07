import React, { Component } from 'react';
import {browserHistory} from 'react-router'; 
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import RaisedButton from 'material-ui/RaisedButton';
import fire from './firebase';

class Login extends Component{
constructor(props){
    super(props);
    this.state={
        user:'',
        email:'',
        pass:'',
        show:[]
    }
}
valueGet=(inputfld,ev)=>{
let obj={}
obj[inputfld]=ev.target.value;
this.setState(obj);
console.log(obj);
}


savefire=()=>{
    let database = fire.database().ref('/')
    if(this.state.email!=="" && this.state.pass!==""){
fire.auth().signInWithEmailAndPassword(this.state.email,this.state.pass)
.then((ref)=>{
    database.child("users/"+ ref.uid).once("value",(snapshot)=>{
        localStorage.setItem("users", JSON.stringify(snapshot.val()))            
    })
       
    
    browserHistory.replace("/home")

})
.catch((error)=>{
    console.log(alert(error))
})
}
else{alert("Fill it")}
}  



render(){
 return(<MuiThemeProvider>
     <div  className="title">
     <AppBar 
         title="LogIn"   className="title"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
       />
        
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
       <RaisedButton label="LogIn"  onClick={this.savefire} primary={true} style={{ margin: 12}} />
      
        </div>
        </MuiThemeProvider>
        );

}
}





export default Login;