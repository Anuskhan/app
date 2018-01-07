import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import fire from './firebase';
import { browserHistory } from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import './App.css';
class Crime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      celnum: "",
      msg: "",
      date: "",
      tcrime: "",


    }

  }

  valueGet = (inputFld, ev) => {
    let obj = {}
    obj[inputFld] = ev.target.value;
    this.setState(obj)
    console.log(this.state.inputFld)
  }
  Submit = () => {
    if (this.state.name !== '' && this.state.celnum !== '' && this.state.msg !== '' && this.state.tcrime !== '') {

      let obj = {
        name: this.state.name,
        celnum: this.state.celnum,
        msg: this.state.msg,
        date: this.state.date,
        tcrime: this.state.tcrime,


      }

      fire.database().ref('/').child("Crime").push(obj)
        .then((user) => {
          console.log("success")
          this.setState({
            name: "",
            celnum: "",
            msg: "",
            date: "",
            tcrime: ""
          })
          { browserHistory.push("/CrimeShow") }
        })
      // .then((success)=>{
      //   setTimeout(()=>{

      //    // window.location.reload()
      //   },1000)
      //   })
    }
    else { alert("fill all TextField") }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 className="heading" onClick={() => { browserHistory.push("/home") }}>Street Crime</h1>
          <TextField
            hintText="Name " onChange={(ev) => { this.valueGet("name", ev) }}
            floatingLabelText="User Name"
            type="text"
          />
          <br />

          <TextField
            hintText="Phone no" onChange={(ev) => { this.valueGet("celnum", ev) }}
            floatingLabelText="Phone no"
            type="number"
          />
          <br />
          <TextField
            hintText="Type Of Crime" onChange={(ev) => { this.valueGet("tcrime", ev) }}
            floatingLabelText="Type Of Crime"
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
          <DatePicker hintText="Portrait Dialog" onChange={(ev, pick) => { let obt = pick.toLocaleString(); this.setState({ date: obt }), console.log(pick) }}
          />
          <br />
          <RaisedButton label="Submit" onClick={this.Submit} primary={true} style={{ margin: 12 }} />
        </div>
      </MuiThemeProvider>

    );
  }
}


export default Crime;