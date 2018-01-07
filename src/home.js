import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {browserHistory} from 'react-router';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Missing from "./missing";
import Crime from "./crime";
import Report from "./report";
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: ""

    }
  }
  radioval = (ev) => {

    this.setState({ radio: ev.target.value })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RadioButtonGroup name="shipSpeed" onChange={(ev) => { this.radioval(ev) }} defaultSelected="not_light">
            <RadioButton
              value="Missing"
              label="Missing person"
              style={{ marginBottom: 16 }}
            />
            <RadioButton
              value="Street"
              label="Crime"
              style={{ marginBottom: 16 }}
            />
            <RadioButton
              value="Report"
              label="Report any Depart"
              style={{ marginBottom: 16 }}
            />

          </RadioButtonGroup>

          {
            (this.state.radio == "Missing") ?
              (<Missing />)
              :
              console.log("success")
          }
          {
            (this.state.radio == "Report") ?
              (<Report />)
              :
              console.log("success")
          }
          {
            (this.state.radio == "Street") ?
              (<Crime />)
              :
              console.log("success")
          }

        </div>
      </MuiThemeProvider>

    );
  }
}

export default Home;