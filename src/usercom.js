import React, { Component } from 'react';
import './App.css';
import './index.css';
import fire from './firebase'
import {
    Card, CardTitle, CardText, CardBody, Container, Row, Col,Button 
} from 'reactstrap';

import { browserHistory } from 'react-router'


let database = fire.database().ref("/")


class Usercom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            value: [],

        }

    }
    componentWillMount() {
        let data = [];
        let info = localStorage.getItem('users')
        info = JSON.parse(info);
        console.log(info.userID)

        // if(userobject!=undefined){

        database.child('users').child(info.userID).child("DepartComplain").on("child_added", (snap) => {

            console.log(snap.val())

            let obj = snap.val();
            obj.key = snap.key;
            data.push(obj)
            this.setState({ value: data });

        })
        // }
        //     } 
        //      else {
        //     //    browserHistory.push('/')
        // console.log("error")    
        // }



    }



    render() {
        return (

            <div>
                 <span>

              <h1  className="missing"  >DepartComplain </h1>
                    <Button onClick={()=>{ browserHistory.push("/")}} className="head" >Home</Button>
                    <Button onClick={this.logout} className="head" >Logout</Button>
                    
              
            
             </span>
                {
                    this.state.value.map((value, index) => {
                        return (
                                   
                            <Container>

                                <Row>

                                    <Col sm={{ size: 6, offset: 3 }}>
                                        <div style={{ minHeight: '250px', padding: '10% 5%', position: 'relative', top: '30px', backgroundColor: 'white', boxShadow: '0px 6px 18px 5px black', marginBottom: '5%' }}>
                                        {/* {console.log("value",value)} */}
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>User Name: {value.name}</CardTitle>
                                                    <CardTitle>Depart Name:{value.depart}</CardTitle>
                                                    <CardText className="over">DepartComplain : {value.msg}</CardText>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>

                            </Container>

                        )
                    })
                }


            </div>
        )

    }
}



export default Usercom;