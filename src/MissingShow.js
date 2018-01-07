import React, { Component } from 'react';
import './App.css';
import {browserHistory} from 'react-router';
import fire from "./firebase";
import {
    Card, CardTitle, CardText,
    CardBody,Container, Row, Col , Button 
} from 'reactstrap';


class MissingShow extends Component {
    constructor(props){
        super(props);
        this.state={
            dataArray : []
       }
     
     
        }
        logout=()=>{
          fire.auth().signOut().then(()=>{
            localStorage.clear();
            browserHistory.push("/Main-page")
          })
        }
        componentWillMount(){
            let database = fire.database().ref("/")
            let data = [];
            database.child('Missing').on("child_added", (snapshot) => {
                let obj = snapshot.val();
                obj.key = snapshot.key;
                  data.push(obj)
                this.setState({dataArray : data});
                // console.log(snapshot.val())
              })
            }
            render(){
                
               return(
                   
                  <div>
                    <span>

              <h1  className="missing"  >Missing Persons </h1>
                    <Button onClick={()=>{ browserHistory.push("/")}} className="head" >Home</Button>
                    <Button onClick={this.logout} className="head" >Logout</Button>
                    
              
            
             </span>
   
             {
              
              this.state.dataArray.map((value,index)=>{
                console.log(value.name,"value",index,"index")
                
                return(
                    
                      <div>
                      
                        <div>
                            
                        <Container>
                      <Row>
                        
   
                    <Col sm={{ size: 6, offset: 3 }}>
     <div className="center" style={{fontSize:20, minHeight: '350px', padding: '10% 6%',textAlign:"center", position: 'relative', top: '15px', backgroundColor: 'white', boxShadow: '0px 4px 12px 4px gray' ,marginBottom:'5%'}}  key={index}>

                 <Card>
    <CardBody>
      <CardTitle>Missing Person Name: {value.Mname}</CardTitle>
      <CardTitle> Missing Person Age: {value.mAge}</CardTitle>
      <CardTitle>Any Imformation Contact No: {value.celnum}</CardTitle>
      
      
      
      <CardTitle>Missing Date: {value.date}</CardTitle>
      <br />
      <CardText><span style={{borderBottom:'1px solid black'}}>Description</span><br/>{value.msg}</CardText>
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

export default MissingShow;