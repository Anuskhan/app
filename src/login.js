import React, { Component } from "react";
import fire from './firebase';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ""

        }

    }
    pick = (inputfld, ev) => {
        let obj = {}
        obj[inputfld] = ev.target.value
        this.setState(obj)
        console.log(obj)
    }
Login=()=>{
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((res)=>{
            fire.database().ref("/").child("user"+res.uid).once("value",(snapshot)=>{
                localStorage.setItem("users",JSON.stringify(snapshot.val()))
                console.log("success")
            })
    })

}
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" value={this.state.email} onChange={(ev)=>{this.pick("email",ev)}} placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" value={this.state.password} onChange={(ev)=>{this.pick("password",ev)}} placeholder="password" />
                </FormGroup>
                <Button onClick={this.Login}>Submit</Button>
            </Form>
        )

    }
}
export default Login;