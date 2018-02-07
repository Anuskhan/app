import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { chkfun } from '../store/action/action';
class About extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'anas',
            email:'khna234@gmail.com',
            password:'234123'
        }
    }
    submit=()=>{
        let user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        // let get=this.props.initailState;
        // get.push(user)
        this.props.chkfun(user)
    }


    render() {
 
        // for(var key in this.props.initailState){
            // console.log(this.props.initailState[key],"this.props.initailState[key],")
        //       } 
        return (
            <div>
              <button onClick={this.submit}>submit</button>
              {
                //   this.props.initailState.name.map((value,key)=>{
                //             return <h1 key={key}>{value}</h1>
                //   })
                    // <h1>{this.props.initailState.email}</h1>
                    // this.props.initailState.map((value,index)=>{
                    //     console.log(value,"")
                    // })
              }
            </div>
        )
    }
}
// console.log(connect)
function mapStateToProp(state){
    console.log(state.root.initailState.name,"initailState.name")
    console.log(state.root.initailState.email,"initailState.email")
    return({
        userName: state.root.userName,
        initailState:state.root.initailState
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        chkfun: (user)=>{
           dispatch(chkfun(user));
       }
    })
}


export default connect(mapStateToProp,mapDispatchToProp)(About);
