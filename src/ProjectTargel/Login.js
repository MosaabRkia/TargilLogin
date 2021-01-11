import React, { Component } from 'react'
import { withRouter} from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            message:"Please Login In"
        }
    }
    onChangeE=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
    
    onLogin=()=>{
        if(this.state.email !== "" && this.state.password !== ""){
            this.props.Users.map((user)=>{
                if(user.email === this.state.email && user.password === this.state.password){
                    this.setState({message:"Sucessfully"}) 
                    const { history } = this.props;
                    history.push("/Main")
                 }
                
              })
        }
        else{
            this.setState({message:"invalid Email Or Password !!"})
           }

        this.setState({message:"invalid Email Or Password !!"})
      
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1><br/>
               <h3> {this.state.message}</h3>
               <br/>
                <input className="form-control" placeholder="Enter Email" name="email" type="text" onChange={this.onChangeE} />
                <small  id="emailHelp" class="form-text ">We'll never share your email with anyone else.</small>
                
                <input className="form-control" placeholder="Enter Password" name="password" type="password" onChange={this.onChangeE}/>
                <small  id="emailHelp" class="form-text ">We'll never share your password with anyone else.</small>
              
                <button className="btn btn-light" onClick={this.onLogin}>Login</button>
           
                
                <br/>
             
                <br/>
            </div>
        )
    }
}
export default withRouter(Login) 
