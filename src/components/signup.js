import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { changeUserName } from '../store/action/action';
import {signupfun} from  "../store/action/action"
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
          
        }
    }
    changeVal = (inputfld,ev) => {
        let obj={}
        obj[inputfld]=ev.target.value;
        this.setState(obj);
        // console.log(obj)
    }
    submit = () => {
        let user={
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
              
        }
        this.setState({
            name: "",
            email: "",
            password: ""
        })
        this.props.signupSubmit(user)
    }
    render() {
        // console.log(this.props.currentPortfolio,"this.props.currentPortfolio")
        return (
            <div>
                <h1>SignUp </h1>
                name:<input type="text" value={this.state.name} onChange={(ev)=>{this.changeVal("name",ev)}} /><br />
                email:<input type="email" value={this.state.email}  onChange={(ev)=>{this.changeVal("email",ev)}} /><br />
                password:<input type="password" value={this.state.password}  onChange={(ev)=>{this.changeVal("password",ev)}} /><br />
                 <button onClick={this.submit}>submit</button>
                <br />
                {/* <h2>{this.props.currentPortfolio[0].userName}</h2> */}
               

            </div>
        )
    }
}

function mapStateToProp(state) {
    // console.log(state,"state")
    return ({

      
    })
}
function mapDispatchToProp(dispatch){
   
    return({
        signupSubmit: (user)=>{dispatch(signupfun(user))}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(SignUp);
// export default Navbar;
