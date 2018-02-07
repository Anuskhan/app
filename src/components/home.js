import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeUserName} from '../store/action/action';
class Home extends Component {

   

    render() {
        return (
            <div>
               <h1>Hello {this.props.userName}</h1>
             {/* <h1>{this.props.currentUser}</h1 > */}
               <button onClick={this.props.changeUserName}>change</button>
            </div>
        )
    }
}

function mapStateToProp(state){
    console.log(state)
    return({
    userName:state.root.userName,
    currentUser:state.root.currentUser
    })
}
function mapDispatchToProp(dispatch){
    return({
        changeUserName: ()=>{dispatch(changeUserName())},
       
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);

