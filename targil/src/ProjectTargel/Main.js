import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            description:null,
            tittle:null,
            id:0,
            message:""
        }
    }
    ChangeText=(e)=>{
        if(e.target.value !== null && e.target.value !== ""){
            this.setState({[e.target.name]:e.target.value})
        }
        else{
            this.setState({message:"Its Empty Fill Me",text:""})
        }
    }
    SendToListData=()=>{
        if(this.state.tittle !== null && this.state.tittle !== "" && this.state.description !== null && this.state.description !== ""){
            this.props.GetDataFromChild(this.state.tittle,this.state.description,this.state.id);
             this.setState({message:"added",id:this.state.id+1})
        }
        else{
            this.setState({message:"Ops SomeThing Wrong Try Again"})
        }
       
    }

    render() {
        return (
            <div className="container">
                <h1>Add to List</h1><br/>
                <input  className="form-control" name="tittle" onChange={this.ChangeText} type="text" placeholder="Enter Tittle" /><br/>
                <input  className="form-control" name="description" onChange={this.ChangeText} type="text" placeholder="Enter Description" /><br/>
                <button  className="btn btn-success" onClick={this.SendToListData} type="button" placeholder="Enter Text" >ADD TO LIST</button><br/>
                {this.state.message}
                <Link to="/Notes">
                <h3> GO TO NOTES</h3>
              </Link>
            </div>
        )
    }
}
export default withRouter(Main);