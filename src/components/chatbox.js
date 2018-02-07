import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendMessage } from '../store/action/action';

class ChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            userid: "",
            textAreaVal: ''
        }

    }

    changeVal = (inputfld, ev) => {
        let obj = {}
        obj[inputfld] = ev.target.value;
        this.setState(obj);
        // console.log(obj)
    }
    sendMessage() {
        // console.log(this.state.textAreaVal);
        let messageData = {
            senderID: this.props.currentUser,
            receiverID: this.props.recipientID,
            message: this.state.textAreaVal,
            seen: false,
            time: new Date().toString()

        }

        let prpmes = this.props.messages;
        let allmessage = [];
        for (var key in prpmes) {
            allmessage.push(prpmes[key]);
        }

        console.log(messageData, 'messageDatamessageData');
        this.props.sendMessage(messageData);
        this.setState({ textAreaVal: "" })
    }

    render() {
        let prpmes = this.props.messages;
        let allmessage = [];
        for (var key in prpmes) {
            allmessage.push(prpmes[key]);
        }

        return (
            <div className="col-md-8" style={{ border: " 6px solid black", overflow: "scroll" }}>

                {/* 
           {
                this.props.messages.map((value,index)=>{
                    console.log(value.message,"")
                    return(
                        <h1 key={index}>{value.message}</h1>
                    //     <div key={index}>   
                    //     {console.log(value)}
                    //      {((this.props.recipientID===value.receverID && this.props.senderID===value.senderID)
                    //                  ||
                    //       //  (val.senderID === this.props.IDs.chaters.receverID && val.receverID === this.props.IDs.chaters.senderID) )?
                    //   (this.props.senderID===value.senderID  &&  this.props.recipientID===value.receverID) )?
                    //              <div>
                    //               {value.message}
                    //            </div>
                    //     :null}
                    //    </div> 
                    )

                })
            }  */}
                {

                    allmessage.map((value, index) => {
                        console.log(value.message,"value.message")
                        console.log(this.props.recipientID,"this.props.recipientID")
                        console.log(value.receiverID,"value.receverID")
                        // return<h1 key={index}>{value.message}<p style={{fontSize:8}}>{value.time}{value.seen}</p></h1>
                                {((this.props.recipientID===value.receverID &&   this.props.senderID===value.senderID)
                                                     ||
                                           (value.senderID === this.props.recipientID && value.receverID === this.props.senderID) )?
                                    //   (this.props.senderID===value.senderID  && this.props.recipientID===value.receverID) )?
                                                 <div key={index}>
                                            {value.message}
                                              </div>
                                         :null}

                        // {
                        //     let a=this.props.senderID ;
                        //     let b=value.senderID ;
                        //     let c=this.props.recipientID ;
                        //     let d=value.receiverID ;
                           
                        //     ((value.senderID==c && d==c ) || (c===d && a==b)) ?
                        //     (<h1 key={index}>{value.message}<p style={{fontSize:8}}>{value.time}{value.seen}</p></h1>)
                        //     // console.log(a==b,c==d)
                        //     :
                        //     console.log("value nh chlii")
                        // }
                    })

                }

                <div className="col-md-4" >
                    {/* <h1>hello chatbox </h1> */}
                    <div className="form-group">
                        {console.log()}
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(ev) => { this.changeVal("textAreaVal", ev) }}></textarea>
                        <button onClick={this.sendMessage.bind(this)}>send</button>
                    </div>

                </div>
                <br />



            </div>
        )
    }
}

function mapStateToProp(state) {
    console.log(state.root.recipientID, "chkmes")
    return ({
        currentUser: state.root.currentUser,
        recipientID: state.root.recipientID,
        messages: state.root.messages,
        time: state.root.time,
        seen: state.root.seen,
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        sendMessage: (msg) => {
            dispatch(sendMessage(msg));
        }
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(ChatBox);
// export default Chat;
