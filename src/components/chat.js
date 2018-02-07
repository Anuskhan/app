import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import ChatBox from './chatbox';
import { changeRecipientUID } from '../store/action/action';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
        id:"",
        userid:"",
        chatBoxShow:false
        }
    }
    setRecipient(recUid){
        console.log('recipient',recUid);
        this.props.changeRecUID(recUid);
        this.setState({
            
            chatBoxShow:true
        })
    }   
    changeVal = (inputfld, ev) => {
        let obj = {}
        obj[inputfld] = ev.target.value;
        this.setState(obj);
        // console.log(obj)
    }
    getId=(id)=>{
        this.setState({
            id:id,
            chatBoxShow:true
        })
    }
    render() {
        return (
            <div>
                <h1>hello chat </h1>
                {/* <textarea rows="4" cols="50" onChange={(ev) => { this.changeVal("message", ev) }}>
                </textarea>
                <textarea rows="4" cols="50" onChange={(ev) => { this.changeVal("rev", ev) }}>
                </textarea>
                <button onClick={this.submit}>submit</button> */}
                <br />
            {/* {
                this.props.Alluser.map((value,index)=>{
                        return(
                            <h3 key={index} onClick={this.getId.bind(this , value.uid)}>{value.name}</h3>
                        )
                })
            }
            {this.state.id} */}
 {
                    this.props.Alluser.map((user, index)=>{
                        return(
                            <h2 style={{background:"blue",color:"white"}} key={index} onClick={this.setRecipient.bind(this, user.uid)}>{user.name}</h2>
                        )
                    })
                }
            <br/>
            
            {/* <h4>currentUser{this.props.currentUser}</h4> */}

            {(this.state.chatBoxShow)?
            <ChatBox/>
                 :
                 null   
            }
         
            
            </div>
        )
    }
}

function mapStateToProp(state) {
    console.log(state.root.messages.seen,"statechatv")
    return ({
     Alluser:state.root.users,
     currentUser:state.root.currentUser,
     allMessages: state.root.messages,
     recipientID: state.root.recipientID
    })
}
function mapDispatchToProp(dispatch){

    return({
        changeRecUID: (recID)=>{
            dispatch(changeRecipientUID(recID))
                }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Chat);
// export default Chat;
