import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {loginfun} from  "../store/action/action"


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'anaskhan2334@gmail.com',
            password: 'anaskhan2334@gmail.com'
        }
    }
    changeVal = (inputfld,ev) => {
        let obj={}
        obj[inputfld]=ev.target.value;
        this.setState(obj);
        // console.log(obj)
    }
   signIn=()=>{
let user={
    email:this.state.email,
    password:this.state.password
}
this.setState({
    email:'',
    password:''
})

this.props.loginfun(user)
   }
    render() {
// console.log(this.state.rev)
        // console.log(this.props.currentPortfolio,"this.props.currentPortfolio")
        return (
            <div>
                <h1>Login </h1>
                email:<input type="email" value={this.state.email}  onChange={(ev)=>{this.changeVal("email",ev)}} /><br />
                password:<input type="password" value={this.state.password}  onChange={(ev)=>{this.changeVal("password",ev)}} /><br />
                <button onClick={this.signIn}>signIn</button>
                <br />
                {/* <h2>{this.props.currentPortfolio[0].userName}</h2> */}
              
                
            </div>
        )
    }
}

function mapStateToProp(state) {
    // console.log(state.root.messages   ,"state")
    return ({
       
    })
}
function mapDispatchToProp(dispatch){
   
    return({
       loginfun:(user)=>{dispatch(loginfun(user))}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Login);
// export default Navbar;
