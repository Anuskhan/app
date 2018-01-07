import React, { Component } from 'react';
import './App.css';
import { browserHistory } from 'react-router';

import fire from "./firebase";
import {
  Card, CardTitle, CardText,
  CardBody, Container, Row, Col, Button
} from 'reactstrap';


class CrimeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: []
    }


  }
  componentWillMount() {
    let database = fire.database().ref("/")
    let data = [];
    database.child('Crime').on("child_added", (snapshot) => {
      let obj = snapshot.val();
      obj.key = snapshot.key;
      data.push(obj)
      this.setState({ dataArray: data });
      // console.log(snapshot.val())
    })
  }
  logout = () => {
    fire.auth().signOut().then(() => {
      localStorage.clear();
      browserHistory.push("/Main-page")
    })
  }
  render() {

    return (


      <div>
        <span>

          <h1 className="missing"  >Crime Reports </h1>
          <Button onClick={() => { browserHistory.push("/") }} className="head" >Home</Button>
          <Button onClick={this.logout} className="head" >Logout</Button>



        </span> {

          this.state.dataArray.map((value, index) => {
            console.log(value.name, "value", index, "index")

            return (

              <div>

                <div>

                  <Container>
                    <Row>

                      <Col sm={{ size: 6, offset: 4 }}>
                        <div className="center" style={{ fontSize: 20, minHeight: '350px', padding: '10% 6%', textAlign: "center", position: 'relative', top: '15px', backgroundColor: 'white', boxShadow: '0px 4px 12px 4px gray', marginBottom: '5%' }} key={index}>

                          <Card>
                            <CardBody>
                              <CardTitle>Type OF Crime: {value.tcrime}</CardTitle>
                              <CardTitle>Person Name: {value.name}</CardTitle>
                              <CardTitle>Person Contact No: {value.celnum}</CardTitle>
                              <CardTitle>Crime Time: {value.date}</CardTitle>
                              <br />
                              <CardText><span style={{ borderBottom: '1px solid black' }}>Description</span><br />{value.msg}</CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </Col>
                    </Row>

                  </Container>
                </div>
              </div>

            )
          })
        }
      </div>
    )

  }

}

export default CrimeShow;