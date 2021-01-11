import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import Note from "./Note";
import './ProjectCss.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      notes: []
    };
  }

  RemoveNote=(e)=>{
    let numberId = parseInt(e.target.id)
    let temparr = this.state.notes.filter(note => note.id !== numberId)
    this.setState({notes:temparr})
  }

  GetDataFromChild = async(tittle,dec,id) => {
    if(tittle !== null && tittle !== "" && dec !== null && dec !== "")
    {
      let tempNotes = [...this.state.notes, {tittle:tittle,description:dec,id:parseInt(id)}];
      await this.setState({ notes: tempNotes });
    }
  };
  

  SendDataToParent = async (e) => {
    let temp = [...this.state.Users, e];
    await this.setState({ Users: temp });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <div id="" className="form-group">
              <Login GetLoggened={this.GetLoggened} Users={this.state.Users} />

              <Link to="/Register">
                <p className="container"> Click Here To Create Account ....</p>
              </Link>

            </div>
          </Route>

          <Route exact path="/Register">
            <Register SendDataToParent={this.SendDataToParent} />
            <Link to="/">
                <p className="container"> Click Here To Login Page ...</p>
              </Link>
          </Route>

          <Route exact path="/Main">
            <Main GetDataFromChild={this.GetDataFromChild} />
          </Route>

          <Route exact path="/Notes">
            <Note 
            notes={this.state.notes}
            RemoveNote={this.RemoveNote} />
             <Link to="/Main">
                <p className="container"> Go Back To Add to list ...</p>
              </Link>
          </Route>
          
        </Switch>
      </div>
    );
  }
}
