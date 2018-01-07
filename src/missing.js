import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import fire from './firebase';
import {browserHistory} from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import './App.css';
class Missing extends Component {
    constructor(props){
      super(props);
      this.state={
        name:"",
        email:"",
        celnum:"",
        msg:"",
        date:"",
        Mname:"",
        mAge:""
   
     }
   
   
      }
   
      valueGet=(inputFld,ev)=>{
        let obj={}
        obj[inputFld]=ev.target.value;
        this.setState(obj)
         console.log(this.state.inputFld)
      }
      Submit=()=>{
        if (this.state.name !== '' && this.state.Mname !== ''&& this.state.mAge !== ''  && this.state.email !== '' && this.state.celnum !== ''&& this.state.msg !== '') {
          
          let obj={
            name:this.state.name,
            email:this.state.email,
            celnum:this.state.celnum,
            msg:this.state.msg,
            date:this.state.date,
            Mname:this.state.Mname,
            mAge:this.state.mAge
      
          }
      
          fire.database().ref('/').child("Missing").push(obj)
          .then((use)=>{
            this.setState({
              name:"",
              email:"",
              celnum:"",
              msg:"",
              date:"",
              Mname:"",
              mAge:""
            })
           { browserHistory.push("/MissingShow")}
        })
       }
      else{alert("fill All TextField")}
      }
 render(){
   
          return(
            <MuiThemeProvider>
              <div>
                  <h1 className="heading">Missing person</h1>
                  <TextField
            hintText="Name " onChange={(ev)=>{this.valueGet("name",ev)}}
            floatingLabelText="User Name"
            type="text"
          />
          <br/>
                  <TextField
            hintText="Email" onChange={(ev)=>{this.valueGet("email",ev)}}
            floatingLabelText="User Email"
            type="Email"
          />
          <br/>
          <TextField
            hintText="Phone no" onChange={(ev)=>{this.valueGet("celnum",ev)}}
            floatingLabelText="Phone no"
            type="number"
          />
          <br/>
          <TextField
            hintText="Missing Name" onChange={(ev)=>{this.valueGet("Mname",ev)}}
            floatingLabelText="Missing Name"
            type="text"
          />
          <br/>
          <TextField
            hintText="Missing Age" onChange={(ev)=>{this.valueGet("mAge",ev)}}
            floatingLabelText="Age"
            type="number"
          />
          <br/>
                <TextField
            hintText="Description" onChange={(ev)=>{this.valueGet("msg",ev)}}
            errorText="This field is required."
            floatingLabelText="Description"
            multiLine={true}
            rows={2}/>
           <br/>
           <DatePicker hintText="Portrait Dialog" onChange={(ev,pick)=>{let obt=pick.toLocaleString(); this.setState({date:obt}),console.log(pick)}} />
           <br/>
           <RaisedButton label="Submit" onClick={this.Submit} primary={true} style={{margin: 12}} />
              </div>
            </MuiThemeProvider>
         
          );
      }
    }
    //name age date 

export default Missing;