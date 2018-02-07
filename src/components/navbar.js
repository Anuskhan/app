import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { changeUserName } from '../store/action/action';
import {createPortfolio} from  "../store/action/action"
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userNameInput: "",
            professionInput: "",
            apprenceInput: ""
        }
    }
    changeVal = (ev) => {
        this.setState({ userNameInput: ev.target.value })
    }
    changeValPro = (ev) => {
        this.setState({ professionInput: ev.target.value })
    }
    changeValApr = (ev) => {
        this.setState({ apprenceInput: ev.target.value })
    }
    submit = () => {
        // console.log("work")
        let create={
            userName:this.state.userNameInput,
        profession:this.state.professionInput,
        apprence:this.state.apprenceInput
    }
    console.log(create);
    this.setState = {
        userNameInput: "",
        professionInput: "",
        apprenceInput: ""
    }
    var portclone=this.props.currentPortfolio;
    portclone.push(create)
    this.props.PortfolioFun(portclone)
    }
    render() {
        // console.log(this.props.currentPortfolio,"this.props.currentPortfolio")
        return (
            <div>
                <h1>Portfolio </h1>
                name:<input type="text" value={this.state.userNameInput} onChange={this.changeVal} /><br />
                profession:<input type="text" value={this.state.professionInput} onChange={this.changeValPro} /><br />
                apprence:<input type="text" value={this.state.apprenceInput} onChange={this.changeValApr} /><br />
                <button onClick={this.submit}>submit</button>
                <br />
                {/* <h2>{this.props.currentPortfolio[0].userName}</h2> */}
                {
                    this.props.currentPortfolio.map((Portfolio, index) => {
                        return (
                            <div key={index}>
                                {Portfolio.userName}
                                {Portfolio.profession}
                                {Portfolio.apprence}
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

function mapStateToProp(state) {
    // console.log(state,"state")
    return ({

        currentPortfolio: state.root.portfolios
    })
}
function mapDispatchToProp(dispatch){
   
    return({
        PortfolioFun: (newport)=>{dispatch(createPortfolio(newport))}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Navbar);
// export default Navbar;
