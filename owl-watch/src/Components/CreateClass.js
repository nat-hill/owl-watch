import React, { Component } from 'react';
//import DatePicker from 'react-datepicker';
import axios from 'axios';
//import "react-datepicker/dist/react"

export default class CreateClass extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      class: '',
      username: '',
      classes: [],
      users: [],      
    }
  }
  componentDidMount() {
        
       
    axios.get('http://localhost:3002/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangeClass(e) {
    this.setState({
      class: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();



    axios({
      method: 'post',
      url:'http://localhost:3002/users/add_class',
      headers: {},
      data: {
        className: this.state.class,
        username: this.state.username
      }

    })
      .then(res => console.log(res.data));

    this.setState({
      class: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Class</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select 
          value={this.state.username}
          onChange={this.onChangeUsername}>
          {
              this.state.users.map(function(user) {
                  return <option
                      key={user}
                      value={user}>{user}
                      </option>;
              })
          }
          </select>
        </div>
        <div className="form-group">
            <label>Class Name:</label>
            <input
                required
                type="text"
                className="form-control"
                value={this.state.class}
                onChange={this.onChangeClass}/>
        </div>
        <div className="form-group">
            <input type="submit" value="Create Class" className="btn btn-primary" />
        </div>
        </form>
      </div>
    )
  }
}





