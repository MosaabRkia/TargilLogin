import React, { Component } from "react";
import {  withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordCon: "",
      message: "Please Fill All",
      registered: "",
    };
  }

  onChangeE = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  onclickevent = () => {
    if (
      this.state.password === this.state.passwordCon &&
      this.state.password.length >= 8 &&
      this.validateEmail(this.state.email) === true &&
       this.state.password !== ""
        && this.state.passwordCon !== "" 
        && this.state.email !== "" 
      && this.state.password !== null
        && this.state.passwordCon !== null
        && this.state.email !== null 
    ) {
      
      let newuser = {
        email: this.state.email,
        password: this.state.password,
        passwordCo: this.state.passwordCon
      };
        this.props.SendDataToParent(newuser);
        this.setState({registered:"/"})
        const { history } = this.props;
        history.push("/")
    }
     else if(this.state.password !== this.state.passwordCon){
      this.setState({
        message: "Passwords not Same !! "});
        
    }
    else if(!(this.validateEmail(this.state.email))){
      this.setState({
        message: "email's not correct !! "});
        
    }
    else{
      this.setState({
        message: "Something Wrong !! "});
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <br />
        <h3> {this.state.message}</h3>
        <br />
        <input
        className="form-control"
          name="email"
          type="email"
          onChange={this.onChangeE}
          placeholder="email"
        />
        <br />
        <input
        className="form-control"
          name="password"
          type="password"
          onChange={this.onChangeE}
          placeholder="password"
        />
        <br />
        <input
        className="form-control"
          name="passwordCon"
          type="password"
          onChange={this.onChangeE}
          placeholder="Confirm Password"
        />
        <br />
      
          <button className="btn btn-light" onClick={this.onclickevent}>register</button>
         
        <br />
      
        <br />
      </div>
    );
  }
}
export default withRouter(Register) 
