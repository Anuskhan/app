import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import fire from './firebase';
import { browserHistory } from 'react-router';
import './App.css';
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userkey: "",
      name: "",
      msg: "",
      Phone: "",
      depart: ""


    }


  }


  componentWillMount() {
    let info = localStorage.getItem('users')
    info = JSON.parse(info);
    this.setState({
      userkey: info
    })
  }
  valueGet = (inputFld, ev) => {
    let obj = {}
    obj[inputFld] = ev.target.value;
    this.setState(obj)
  }
  Submit = () => {
    if (this.state.name !== '' && this.state.msg !== '' && this.state.Phone !== '' && this.state.depart !== '') {
      let database = fire.database().ref('/')
      let obj = {
        name: this.state.name,
        Phone: this.state.Phone,
        depart: this.state.depart,
        msg: this.state.msg,

      }
      database.child("users").child(this.state.userkey.userID).child("DepartComplain").push(obj)
        .then((user) => {
          //   this.setState({
          //    name:"",
          //   Phone:"",
          //   depart:"",
          //   msg:""})
          browserHistory.push("/usercom")
        })
        .catch((error) => { console.log(error) })
    }
    else { alert("fill All TextField") }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 className="heading">Report Any depart</h1>
          <TextField
            hintText="Reporter Name " onChange={(ev) => { this.valueGet("name", ev) }}
            floatingLabelText="Reporter Name"
            type="text"
          />

          <br />
          <TextField
            hintText="Reporter Phone no" onChange={(ev) => { this.valueGet("Phone", ev) }}
            floatingLabelText=" ReporterPhone no"
            type="number"
          />
          <br />
          <TextField
            hintText="Department Name" onChange={(ev) => { this.valueGet("depart", ev) }}
            floatingLabelText="Depart Name"
            type="text"
          />

          <br />
          <TextField
            hintText="Description" onChange={(ev) => { this.valueGet("msg", ev) }}
            errorText="This field is required."
            floatingLabelText="Description"
            multiLine={true}
            rows={2} />
          <br />
          <RaisedButton label="Submit" onClick={this.Submit} primary={true} style={{ margin: 12, width: 300 }} />
        </div>
      </MuiThemeProvider>

    );
  }
}


export default Report;