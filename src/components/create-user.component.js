import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    const divStyle = {
        color: "white",
        backgroundColor: "#333A41",
        borderRadius: "10px",
        padding: "25px",
        fontFamily: "Cursive",
        width: "fit-content",
        display: "block",
        margin: "auto"
      };
      const btnStyle = {
        color: "white",
        display: "block",
        margin: "auto"
      };
    return (
      <div style={divStyle}>
        <h3 style={{textAlign: "center"}}>Create new user</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label></label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                placeholder="Enter an unique username"
                style={{minWidth: "300px", margin: "auto"}}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="create user" className="btn btn-primary" style={btnStyle}/>
          </div>
        </form>
      </div>
    )
  }
}